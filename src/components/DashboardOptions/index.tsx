import { Texts } from "../../styles/DashboardStyle";
import { AddButton, Container, HelpButton, ListButton, Title } from "./styles";
import Modal from 'react-modal'
import { AddModal } from '../../components/AddModal'
import { useState } from "react";

interface GoList {
  onRequestList: () => void;
}




export function DashboardOptions({ onRequestList }: GoList) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <AddModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </Modal>
      <section className='w-full'>
        <Title>Dashboard</Title>
      </section>

      <Container className="p-8 shadow-lg">
        <Texts>
          <h1>Nova proposta</h1>
          <p>Faça uma cotação e verifique o valor da proposta</p>
        </Texts>
        <AddButton onClick={openModal} >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H12.75C12.9489 8.25 13.1397 8.32902 13.2803 8.46967C13.421 8.61032 13.5 8.80109 13.5 9C13.5 9.19891 13.421 9.38968 13.2803 9.53033C13.1397 9.67098 12.9489 9.75 12.75 9.75H9.75V12.75C9.75 12.9489 9.67098 13.1397 9.53033 13.2803C9.38968 13.421 9.19891 13.5 9 13.5C8.80109 13.5 8.61032 13.421 8.46967 13.2803C8.32902 13.1397 8.25 12.9489 8.25 12.75V9.75H5.25C5.05109 9.75 4.86032 9.67098 4.71967 9.53033C4.57902 9.38968 4.5 9.19891 4.5 9C4.5 8.80109 4.57902 8.61032 4.71967 8.46967C4.86032 8.32902 5.05109 8.25 5.25 8.25H8.25V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5ZM0 9C-1.76116e-08 7.8181 0.232792 6.64778 0.685084 5.55585C1.13738 4.46392 1.80031 3.47177 2.63604 2.63604C3.47177 1.80031 4.46392 1.13738 5.55585 0.685084C6.64778 0.232792 7.8181 0 9 0C10.1819 0 11.3522 0.232792 12.4442 0.685084C13.5361 1.13738 14.5282 1.80031 15.364 2.63604C16.1997 3.47177 16.8626 4.46392 17.3149 5.55585C17.7672 6.64778 18 7.8181 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 3.55683e-08 11.3869 0 9ZM9 1.5C7.01088 1.5 5.10322 2.29018 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C5.10322 15.7098 7.01088 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 7.01088 15.7098 5.10322 14.3033 3.6967C12.8968 2.29018 10.9891 1.5 9 1.5Z" fill="#3980FF" />
          </svg>Adicionar
        </AddButton>
      </Container>

      <Container className="p-8 shadow-lg">
        <Texts>
          <h1>Listar propostas</h1>
          <p>Verifique e/ou edite as propostas criadas</p>
        </Texts>
        <ListButton onClick={onRequestList}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3.5C2 3.10218 2.15804 2.72064 2.43934 2.43934C2.72064 2.15804 3.10218 2 3.5 2H4.5C4.89782 2 5.27936 2.15804 5.56066 2.43934C5.84196 2.72064 6 3.10218 6 3.5V4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6H3.5C3.10218 6 2.72064 5.84196 2.43934 5.56066C2.15804 5.27936 2 4.89782 2 4.5V3.5ZM3.5 3C3.36739 3 3.24021 3.05268 3.14645 3.14645C3.05268 3.24021 3 3.36739 3 3.5V4.5C3 4.63261 3.05268 4.75979 3.14645 4.85355C3.24021 4.94732 3.36739 5 3.5 5H4.5C4.63261 5 4.75979 4.94732 4.85355 4.85355C4.94732 4.75979 5 4.63261 5 4.5V3.5C5 3.36739 4.94732 3.24021 4.85355 3.14645C4.75979 3.05268 4.63261 3 4.5 3H3.5Z" fill="#E16F1C" />
            <path d="M2 9.5C2 9.10218 2.15804 8.72064 2.43934 8.43934C2.72064 8.15804 3.10218 8 3.5 8H4.5C4.89782 8 5.27936 8.15804 5.56066 8.43934C5.84196 8.72064 6 9.10218 6 9.5V10.5C6 10.8978 5.84196 11.2794 5.56066 11.5607C5.27936 11.842 4.89782 12 4.5 12H3.5C3.10218 12 2.72064 11.842 2.43934 11.5607C2.15804 11.2794 2 10.8978 2 10.5V9.5ZM3.5 9C3.36739 9 3.24021 9.05268 3.14645 9.14645C3.05268 9.24021 3 9.36739 3 9.5V10.5C3 10.6326 3.05268 10.7598 3.14645 10.8536C3.24021 10.9473 3.36739 11 3.5 11H4.5C4.63261 11 4.75979 10.9473 4.85355 10.8536C4.94732 10.7598 5 10.6326 5 10.5V9.5C5 9.36739 4.94732 9.24021 4.85355 9.14645C4.75979 9.05268 4.63261 9 4.5 9H3.5Z" fill="#E16F1C" />
            <path d="M2 15.5C2 15.1022 2.15804 14.7206 2.43934 14.4393C2.72064 14.158 3.10218 14 3.5 14H4.5C4.89782 14 5.27936 14.158 5.56066 14.4393C5.84196 14.7206 6 15.1022 6 15.5V16.5C6 16.8978 5.84196 17.2794 5.56066 17.5607C5.27936 17.842 4.89782 18 4.5 18H3.5C3.10218 18 2.72064 17.842 2.43934 17.5607C2.15804 17.2794 2 16.8978 2 16.5V15.5ZM3.5 15C3.36739 15 3.24021 15.0527 3.14645 15.1464C3.05268 15.2402 3 15.3674 3 15.5V16.5C3 16.6326 3.05268 16.7598 3.14645 16.8536C3.24021 16.9473 3.36739 17 3.5 17H4.5C4.63261 17 4.75979 16.9473 4.85355 16.8536C4.94732 16.7598 5 16.6326 5 16.5V15.5C5 15.3674 4.94732 15.2402 4.85355 15.1464C4.75979 15.0527 4.63261 15 4.5 15H3.5Z" fill="#E16F1C" />
            <path d="M8 4.5C8 4.36739 8.05268 4.24021 8.14645 4.14645C8.24021 4.05268 8.36739 4 8.5 4H17.5C17.6326 4 17.7598 4.05268 17.8536 4.14645C17.9473 4.24021 18 4.36739 18 4.5C18 4.63261 17.9473 4.75979 17.8536 4.85355C17.7598 4.94732 17.6326 5 17.5 5H8.5C8.36739 5 8.24021 4.94732 8.14645 4.85355C8.05268 4.75979 8 4.63261 8 4.5Z" fill="#E16F1C" />
            <path d="M8 10.5C8 10.3674 8.05268 10.2402 8.14645 10.1464C8.24021 10.0527 8.36739 10 8.5 10H17.5C17.6326 10 17.7598 10.0527 17.8536 10.1464C17.9473 10.2402 18 10.3674 18 10.5C18 10.6326 17.9473 10.7598 17.8536 10.8536C17.7598 10.9473 17.6326 11 17.5 11H8.5C8.36739 11 8.24021 10.9473 8.14645 10.8536C8.05268 10.7598 8 10.6326 8 10.5Z" fill="#E16F1C" />
            <path d="M8 16.5C8 16.3674 8.05268 16.2402 8.14645 16.1464C8.24021 16.0527 8.36739 16 8.5 16H17.5C17.6326 16 17.7598 16.0527 17.8536 16.1464C17.9473 16.2402 18 16.3674 18 16.5C18 16.6326 17.9473 16.7598 17.8536 16.8536C17.7598 16.9473 17.6326 17 17.5 17H8.5C8.36739 17 8.24021 16.9473 8.14645 16.8536C8.05268 16.7598 8 16.6326 8 16.5Z" fill="#E16F1C" />
          </svg>Listar
        </ListButton>
      </Container>

      <Container className="p-8 shadow-lg">
        <Texts>
          <h1>Entrar em contato</h1>
          <p>Reporte erros ou entre em contato com a Omega</p>
        </Texts>
        <HelpButton onClick={() => (window.open('mailto:contato@omegaenergia.com.br'))}>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6154 0C17.4314 0 18.2141 0.324175 18.7911 0.90121C19.3681 1.47825 19.6923 2.26087 19.6923 3.07692V12.9231C19.6923 13.7391 19.3681 14.5218 18.7911 15.0988C18.2141 15.6758 17.4314 16 16.6154 16H3.07692C2.26087 16 1.47825 15.6758 0.90121 15.0988C0.324175 14.5218 0 13.7391 0 12.9231V3.07692C0 2.26087 0.324175 1.47825 0.90121 0.90121C1.47825 0.324175 2.26087 0 3.07692 0H16.6154ZM18.4615 4.87508L10.1588 9.76123C10.0803 9.80732 9.99253 9.83542 9.90187 9.8435C9.8112 9.85159 9.71987 9.83947 9.63446 9.808L9.53354 9.76123L1.23077 4.87754V12.9231C1.23077 13.4127 1.42527 13.8823 1.7715 14.2285C2.11772 14.5747 2.58729 14.7692 3.07692 14.7692H16.6154C17.105 14.7692 17.5746 14.5747 17.9208 14.2285C18.267 13.8823 18.4615 13.4127 18.4615 12.9231V4.87508ZM16.6154 1.23077H3.07692C2.58729 1.23077 2.11772 1.42527 1.7715 1.77149C1.42527 2.11772 1.23077 2.58729 1.23077 3.07692V3.44862L9.84615 8.51692L18.4615 3.44615V3.07692C18.4615 2.58729 18.267 2.11772 17.9208 1.77149C17.5746 1.42527 17.105 1.23077 16.6154 1.23077Z" fill="#FF2E2E" />
          </svg>Contato
        </HelpButton>
      </Container>
    </>
  )
}