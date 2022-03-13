import React, { useCallback } from 'react';
import { useState } from "react"
import "../styles/Inscription.css"
import Notification from "../components/notification/Notification"
import ConfirmDialog from "../components/alert/ConfirmDialog"
import {ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
// import { useGlobalState } from 'state-pool';

function Login(props){
    //Notif
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    //Alert
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    // const [apiLink,] = useGlobalState('apiLink')
    const navigate = useNavigate()
    const [nom,setNom] = useState(null)
    const [prenom,setPrenom] = useState(null)
    const [email,setEmail] = useState(null)
    const [mdp, setMdp] = useState(null)
    const [confirmMdp, setConfirmMdp] = useState(null)
    const [loginError, setLoginError] = useState(null) 
    const [loading , setLoading] = useState(false)

    document.addEventListener('keydown', logKey);

    function logKey(e) {
        // log.textContent += ` ${e.code}`;
        if(e.code === "Enter"){
            doInscription();
        }
    }

    const doInscription = async() => {
        setLoading(true)
        if(mdp !== confirmMdp){
            setNotify({
                isOpen: true,
                message: 'Votre mot de passe semble incorrect',
                type: 'error'
            })
            setLoading(false)
            return

        }
        console.log(JSON.stringify({ nom :nom , prenom : prenom ,username: email, password: mdp}));
        var apiLink =""
        fetch(apiLink +'/api/v1/user', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'mode':'no-cors'
            },
            body:JSON.stringify({ 
                nom : nom,
                prenom : prenom,
                username: email,
                password: mdp 
            })
        }).then( response => response.json())
        .then((jsonData) =>
        {
            console.log(jsonData)
        });
    }

    return (
        <div className="conteneur">
            <div className='Login'>
                <div className="conteneur-logo">
                    <div className="logo">
                        <img src="./img/syringe.png" alt="logo" />
                    </div>
                </div>
                <div className="formulaire">
                    <form>
                        <h1>Inscription</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label className='formLabel' htmlFor='email'>nom:</label>
                                    </td>
                                    <td>
                                        <input
                                            id="nom"
                                            type="text"
                                            placeholder="Rakoto..."
                                            onChange={(e) => setNom(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='formLabel' htmlFor='prenom'>prenom:</label>
                                    </td>
                                    <td>
                                        <input
                                            id="prenom"
                                            type="text"
                                            placeholder="Nary..."
                                            onChange={(e) => setPrenom(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='formLabel' htmlFor='email'>email:</label>
                                    </td>
                                    <td>
                                        <input
                                            id="email"
                                            type="text"
                                            placeholder="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='formLabel' htmlFor='password'>mot de passe:</label>
                                    </td>
                                    <td>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="mot de passe"
                                            onChange={(e) => setMdp(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='formLabel' htmlFor='password'>confirmer le mot de passe:</label>
                                    </td>
                                    <td>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="confirmer votre mot de passe"
                                            onChange={(e) => setConfirmMdp(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        {/* <input
                                            type="submit"
                                            value="se connecter"
                                            className='btn connexion'
                                        /> */}
                                        <div className="btn connexion" onClick={()=>{
                                            doInscription();
                                        }} >S'incrir</div>
                                    </td>
                                </tr>    
                            </tbody>   
                        </table>
                    </form>
                    <div className="warning">
                        {
                            loading ? (
                                <ThreeDots type="ThreeDots" color="#188CDBFF" height={75} width={75} />
                            ) : (
                                  <></>
                            )
                        }
                    </div>
                </div>
            </div>
             <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </div>
    );
}

export default Login;