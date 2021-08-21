import React, { useContext, useEffect, useState } from 'react';
import logoOmega from '../assets/logo-omega.svg'
import userImg from '../assets/user.svg'
import { Sidebar, LogoffButton, Texts } from '../styles/DashboardStyle'
import { EditModal } from '../components/EditModal';
import { DashboardOptions } from '../components/DashboardOptions';
import { ProposalList } from '../components/PropostalList';
import { Context } from '../contexts/AuthContext';
import { api } from '../services/api';
import jwtDecode, { JwtPayload } from "jwt-decode";


interface AddModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface decodedToken {
  email?: string,
  exp?: number,
  iat?: number,
}


export function Dashboard({ isOpen, onRequestClose }: AddModalProps) {


  const token: string = JSON.parse(localStorage.getItem('access_token')!);
  const decoded_token: decodedToken = jwtDecode<JwtPayload>(token);

  const { handleLogout } = useContext(Context);
  const [renderDashboardChild, setRenderDashboardChild] = useState(0);

  function returnToDashboard() {
    setRenderDashboardChild(0)
  }
  function goToList() {
    setRenderDashboardChild(1)
  }

  return (

    <div className="bg-white">

      <div className="flex">
        {/* Barra do Logo */}
        <aside className="">
          <Sidebar className="">
            <img src={logoOmega} alt="" width="240" />
          </Sidebar>
        </aside>

        <main className="m-8 p-10 w-full flex flex-wrap" id='conteudo'>
          <section className="flex justify-end bg-white w-full">
            <img src={userImg} className="pr-8" alt="" />
            <Texts className="pr-8">
              <p>Boas vindas,</p>
              <h6>{decoded_token.email}</h6>
            </Texts>
            <LogoffButton onClick={handleLogout}>
              <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.6275 10.375C8.95968 10.375 9.27826 10.507 9.51315 10.7418C9.74804 10.9767 9.88 11.2953 9.88 11.6275C9.88 11.9597 9.74804 12.2783 9.51315 12.5132C9.27826 12.748 8.95968 12.88 8.6275 12.88C8.29532 12.88 7.97674 12.748 7.74185 12.5132C7.50696 12.2783 7.375 11.9597 7.375 11.6275C7.375 11.2953 7.50696 10.9767 7.74185 10.7418C7.97674 10.507 8.29532 10.375 8.6275 10.375Z" fill="white" />
                <path d="M13 1.44249V9.75624L22.3025 9.75499L20.15 7.59999C19.9912 7.44126 19.8947 7.23081 19.8779 7.00693C19.8612 6.78304 19.9254 6.56058 20.0588 6.37999L20.15 6.27499C20.3087 6.11622 20.5192 6.01968 20.7431 6.00294C20.967 5.98619 21.1894 6.05035 21.37 6.18374L21.475 6.27499L25.2213 10.0212C25.38 10.18 25.4766 10.3904 25.4933 10.6143C25.51 10.8382 25.4459 11.0607 25.3125 11.2412L25.2213 11.3462L21.4762 15.1012C21.309 15.2679 21.085 15.3652 20.849 15.3738C20.6131 15.3825 20.3825 15.3018 20.2035 15.1478C20.0245 14.9939 19.9101 14.7781 19.8833 14.5435C19.8564 14.3089 19.9191 14.0729 20.0588 13.8825L20.1488 13.7762L22.29 11.63L13.0013 11.6312L13 20.0625C13.0001 20.1994 12.9701 20.3347 12.9123 20.4588C12.8545 20.5829 12.7702 20.6928 12.6654 20.7809C12.5606 20.8689 12.4377 20.9329 12.3055 20.9684C12.1732 21.0039 12.0348 21.01 11.9 20.9862L1.275 19.1087C1.05822 19.0706 0.861785 18.9574 0.720091 18.789C0.578397 18.6205 0.500484 18.4076 0.5 18.1875V3.18749C0.500003 2.96529 0.57893 2.75031 0.722705 2.5809C0.866481 2.41148 1.06576 2.29864 1.285 2.26249L11.91 0.517491C12.0442 0.495366 12.1816 0.502708 12.3127 0.539007C12.4438 0.575307 12.5654 0.639694 12.6691 0.727702C12.7728 0.815709 12.8561 0.925228 12.9133 1.04866C12.9704 1.17209 13 1.30648 13 1.44249ZM11.125 2.54624L2.375 3.98374V17.4L11.125 18.945V2.54624Z" fill="white" />
                <path d="M14.25 19.1262H15.2063L15.3337 19.1188C15.5586 19.0879 15.7647 18.9765 15.9136 18.8052C16.0626 18.634 16.1443 18.4145 16.1437 18.1875L16.135 12.875H14.25V19.1262Z" fill="white" />
                <path d="M14.2525 8.5L14.25 6.90625V2.25H15.1812C15.4076 2.24997 15.6263 2.33184 15.797 2.48049C15.9678 2.62914 16.0789 2.83454 16.11 3.05875L16.1187 3.18625L16.1275 8.5H14.2525Z" fill="white" />
              </svg>
              Logoff
            </LogoffButton>
          </section>
          {renderDashboardChild === 0 && <DashboardOptions onRequestList={goToList} />}
          {renderDashboardChild === 1 && <ProposalList onRequestReturn={returnToDashboard} />}

        </main>
      </div>
    </div >
  )
}
