import { PrdItemPopProps } from '../types/product';

const PrdItemPop = ({
  setIsOpenPop,
  popType,
  selectedProduct,
}: PrdItemPopProps) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setIsOpenPop(false)} // 바깥쪽 클릭하면 닫기
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
        </ul>
      </div>
    </div>
  );
};

export default PrdItemPop;
