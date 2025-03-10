import { useState } from 'react';
import PageLayout from '../../layouts/PageLayout';
import PrdItemPop from '../../components/PrdItemPop';
import { ProductType } from '../../types/product';

const ProductPage = () => {
  const [isOpenPop, setIsOpenPop] = useState(false);
  const [popType, setPopType] = useState('');
  const [modifiedProduct, setModifiedProduct] = useState<ProductType | null>(
    null
  );
  const [prdListData, setPrdListData] = useState<ProductType[]>([
    {
      id: 0,
      name: '아이폰 15',
      price: '1,200,000원',
      sale: '10%',
      img: '/iphone.jpg',
    },
    {
      id: 1,
      name: '맥북 프로',
      price: '2,500,000원',
      sale: '15%',
      img: '/macbook.jpg',
    },
    {
      id: 2,
      name: '에어팟 프로',
      price: '350,000원',
      sale: '5%',
      img: '/airpods.jpg',
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState<Set<number>>(
    new Set()
  ); // 체크된 상품들의 id를 관리하는 Set

  const handleCheckboxChange = (id: number) => {
    setSelectedProducts((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id); // 이미 선택된 상품이면 제거
      } else {
        newSelected.add(id); // 새로 선택된 상품이면 추가
      }
      return newSelected;
    });
  };

  const removeProduct = () => {
    setPrdListData(
      (prevData) =>
        prevData.filter((product) => !selectedProducts.has(product.id)) // 선택된 상품들만 필터링해서 삭제
    );
    setSelectedProducts(new Set()); // 삭제 후 선택 상태 초기화
  };

  return (
    <PageLayout>
      <h3 className="text-2xl font-bold">상품 대시보드</h3>

      <ul className="pb-10 pt-10">
        <li className="flex items-center justify-between bg-[#2e0f6e] p-4 text-center font-semibold text-white">
          <div className="w-12">
            <input
              type="checkbox"
              onChange={() => {
                if (selectedProducts.size === prdListData.length) {
                  setSelectedProducts(new Set()); // 모든 상품이 선택되었으면 모두 해제
                } else {
                  setSelectedProducts(
                    new Set(prdListData.map((data) => data.id))
                  ); // 모든 상품 선택
                }
              }}
              checked={selectedProducts.size === prdListData.length}
            />
          </div>
          <div className="w-16">ID</div>
          <div className="w-24">이미지</div>
          <div className="flex-1">상품명</div>
          <div className="w-32">가격</div>
          <div className="w-24">할인율</div>
        </li>
        {prdListData.map((data: ProductType) => {
          return (
            <li
              key={data.id}
              className="flex items-center justify-between border-b bg-[#fff] p-4 text-center transition hover:bg-gray-100"
            >
              <div className="w-12">
                <input
                  checked={selectedProducts.has(data.id)}
                  onChange={() => handleCheckboxChange(data.id)}
                  type="checkbox"
                  className="cursor-pointer"
                />
              </div>
              <div className="w-16 text-gray-700">{data.id}</div>
              <div className="w-24">
                <img
                  src={data.img || '/default.jpg'}
                  alt={data.name}
                  className="h-24 w-24 rounded-md border object-cover"
                />
              </div>
              <div
                className="flex-1 cursor-pointer font-medium text-gray-800"
                onClick={() => {
                  setIsOpenPop(true);
                  setPopType('상품수정');
                  setModifiedProduct(data);
                }}
              >
                {data.name}
              </div>
              <div className="w-32 font-semibold text-gray-900">
                {data.price}
              </div>
              <div className="w-24 font-bold text-[#2e0f6e]">{data.sale}</div>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center gap-2">
        <button
          type="button"
          className="block rounded-lg bg-[gray] p-4 text-[#fff] hover:bg-opacity-90"
          onClick={removeProduct}
        >
          상품삭제
        </button>
        <button
          type="button"
          className="block rounded-lg bg-[#2e0f6e] p-4 text-[#fff] hover:bg-opacity-90"
          onClick={() => {
            setIsOpenPop(true);
            setPopType('상품등록');
            setModifiedProduct(null);
          }}
        >
          상품등록
        </button>
      </div>

      {isOpenPop && (
        <PrdItemPop
          popType={popType}
          setIsOpenPop={setIsOpenPop}
          modifiedProduct={modifiedProduct}
          prdListData={prdListData}
          setPrdListData={setPrdListData}
        ></PrdItemPop>
      )}
    </PageLayout>
  );
};

export default ProductPage;
