import styled from 'styled-components';
import Image from 'next/image';
import { CloseIcon } from '@/assets';

interface modalProps {
   showModal: boolean;
   setShowModal: (value: boolean) => void;
   title: string;
   children: JSX.Element;
   showModalHeader: boolean;
}

const Modal = ({ showModal, setShowModal, title, children, showModalHeader }: modalProps) => {
   if (!showModal) {
      return null;
   }
   return (
      <Styles>
         <div className="custom-modal">
            {showModalHeader && (
               <div className="custom-modal-header">
                  <span>{title}</span>
                  <Image src={CloseIcon} alt='close' height={24} onClick={() => setShowModal(false)}/>
               </div>
            )}
            <div className="custom-modal-content">{children}</div>
         </div>
      </Styles>
   );
};

const Styles = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: auto;
   /* background-color: rgb(0, 0, 0); */
   background-color: rgba(0, 0, 0, 0.4);
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1000;

   .custom-modal {
      position: absolute;
      background-color: #FFFFFF;
      border-radius: 4px;
      opacity: 1;
      z-index: 1000;
      margin: 20px;
      min-width: 250px;

      .custom-modal-header {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         font-weight: 600;
         padding: 10px;
         color: #ffffff;
         border-top-left-radius: 4px;
         border-top-right-radius: 4px;
         background: linear-gradient(82.74deg, #6b2ea1 7.22%, #f14281 67.79%);

         @media (max-width: 1030px) {
            padding: 20px 20px;
         }

         svg, img {
            vertical-align: middle;
            float: right;
            cursor: pointer;
         }
      }

      .custom-modal-content {
         padding: 10px;

         @media (max-width: 1030px) {
            padding: 20px;
         }
      }
   }
`;

export default Modal;