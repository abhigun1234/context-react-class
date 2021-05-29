import React from 'react'
import { UserConsumer } from './useContext'
const UserContext=React.createContext()
const  Uprovider =UserContext.Provider
const  Uconsumer =UserContext.Consumer
export {Uprovider,Uconsumer}