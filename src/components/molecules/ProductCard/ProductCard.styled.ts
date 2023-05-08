import styled from 'styled-components';

export const ProductCardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 396px;
  border: 1px solid #d3eaff;
  flex-grow: 1;
  height: 750px;
  overflow: hidden;
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  max-width: 394px;
  height: 296px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 100%;
  width: auto;
  object-fit: cover;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  min-width: 0;
  overflow: hidden; /* Hide any overflowing content within the content div */
`;

export const ProductTitle = styled.h6`
  margin-bottom: 16px;
  font-family: 'Syne';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
`;

export const ProductDescription = styled.p`
  padding: 0 10px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #556b84;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ProductBuyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;
