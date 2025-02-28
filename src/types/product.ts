export type ProductType = {
  id: number;
  name: string;
  price: string;
  sale: string;
  img: string;
};

export type PrdItemPopProps = {
  setIsOpenPop: (value: boolean) => void;
  popType: string;
  selectedProduct: ProductType | null;
  prdListData: ProductType[];
  setPrdListData: React.Dispatch<React.SetStateAction<ProductType[]>>;
};
