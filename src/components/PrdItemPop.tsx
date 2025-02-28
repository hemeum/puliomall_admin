import { useState } from 'react';
import { PrdItemPopProps } from '../types/product';

const PrdItemPop = ({
  setIsOpenPop,
  popType,
  selectedProduct,
  prdListData,
  setPrdListData,
}: PrdItemPopProps) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('');

  const onSubmit = () => {
    if (popType === '상품등록') {
      const newProduct = {
        id:
          prdListData.length > 0
            ? prdListData[prdListData.length - 1].id + 1
            : 1,
        name,
        price,
        sale,
        img: '/default.jpg',
      };
      setPrdListData((prev) => [...prev, newProduct]);
    }
    if (popType === '상품수정' && selectedProduct) {
      setPrdListData((prev) =>
        prev.map((prd) =>
          prd.id === selectedProduct.id ? { ...prd, name, price, sale } : prd
        )
      );
    }
    setIsOpenPop(false);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setIsOpenPop(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute left-1/2 top-1/2 h-[80%] w-[50%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg"
      >
        <h3 className="text-2xl font-bold">{popType}</h3>
        <ul>
          <li>{selectedProduct ? selectedProduct.id : ''}</li>
          <li>{selectedProduct ? selectedProduct.img : ''}</li>
          <li>{selectedProduct ? selectedProduct.name : ''}</li>
          <li>{selectedProduct ? selectedProduct.price : ''}</li>
          <li>{selectedProduct ? selectedProduct.sale : ''}</li>

          <li>
            상품명 :{' '}
            <input
              id="name"
              placeholder="상품명"
              type="text"
              name="name"
              className="border border-gray-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            가격 :{' '}
            <input
              id="price"
              placeholder="가격"
              type="text"
              name="price"
              className="border border-gray-300"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            원
          </li>
          <li>
            할인율 :{' '}
            <input
              id="sale"
              placeholder="할인율"
              type="text"
              name="sale"
              className="border border-gray-300"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
            ></input>
            %
          </li>
        </ul>

        <button
          type="button"
          className="m-auto block rounded-lg bg-[#2e0f6e] p-4 text-[#fff] hover:bg-opacity-90"
          onClick={onSubmit}
        >
          {popType}
        </button>
      </div>
    </div>
  );
};

export default PrdItemPop;
