'use client'
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import cssClass from './test.module.scss';
export default function TestPage() { 
  const [userTele, setUserTele] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined' && window?.Telegram?.WebApp) {
      const tg = window?.Telegram.WebApp;
      tg.ready();
      console.log(tg.initDataUnsafe); // You can access Telegram Web App data here
      console.log(tg.initDataUnsafe?.user, "window?.Telegram?.WebApp?.initDataUnsafe?.user")
      setUserTele(tg.initDataUnsafe?.user)
    }
  }, []);
 
  return (
    <div className={`${cssClass.testCss}` }>
      <h1 className="test">Test page</h1>
      <Button type="primary">Button</Button>
      <div className="user-info">User tele: {userTele && JSON.stringify(userTele)}</div>
    
    </div>
  )
}