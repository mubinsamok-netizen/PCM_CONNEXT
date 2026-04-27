import React, { useState } from 'react';
import { User } from '../types';
import { auth } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signInAnonymously } from 'firebase/auth';
import toast from 'react-hot-toast';

export const LoginScreen = ({ onLogin }: { onLogin?: (u: User) => void }) => {
  const [loading, setLoading] = useState(false);

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      toast.error('ล็อกอินไม่สำเร็จ: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const quickLogin = async (roleKey: string) => {
    const roles: Record<string, User> = {
       'admin': { name: 'Admin User', email: 'admin@pcm.com', role: 'admin', roleName: 'ผู้ดูแลระบบ', avatar: 'https://ui-avatars.com/api/?name=Admin&background=111827&color=fff' },
       'owner': { name: 'Owner User', email: 'owner@pcm.com', role: 'owner', roleName: 'เจ้าของบริษัท', avatar: 'https://ui-avatars.com/api/?name=Owner&background=e55a30&color=fff' },
       'engineer': { name: 'Engineer User', email: 'engineer@pcm.com', role: 'engineer', roleName: 'วิศวกร', avatar: 'https://ui-avatars.com/api/?name=Eng&background=3b82f6&color=fff' },
       'architect': { name: 'Architect User', email: 'architect@pcm.com', role: 'architect', roleName: 'สถาปนิก', avatar: 'https://ui-avatars.com/api/?name=Arch&background=8b5cf6&color=fff' },
       'qs': { name: 'QS User', email: 'qs@pcm.com', role: 'qs', roleName: 'ประเมินราคา', avatar: 'https://ui-avatars.com/api/?name=QS&background=10b981&color=fff' },
       'foreman': { name: 'Foreman User', email: 'foreman@pcm.com', role: 'foreman', roleName: 'โฟร์แมน', avatar: 'https://ui-avatars.com/api/?name=Foreman&background=f59e0b&color=fff' },
       'accountant': { name: 'Accountant User', email: 'accountant@pcm.com', role: 'accountant', roleName: 'ฝ่ายบัญชี', avatar: 'https://ui-avatars.com/api/?name=Acc&background=14b8a6&color=fff' },
       'client': { name: 'Client User', email: 'client@pcm.com', role: 'client', roleName: 'ลูกค้า / ผู้ว่าจ้าง', avatar: 'https://ui-avatars.com/api/?name=Client&background=ec4899&color=fff' },
    };
    
    setLoading(true);
    try {
      if (onLogin) {
          onLogin(roles[roleKey] || roles['admin']);
      }
    } catch (error: any) {
      toast.error('ล็อกอินทดสอบไม่สำเร็จ: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex-grow flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
      <div className="flex flex-col md:flex-row w-full max-w-[1100px] h-full sm:h-auto min-h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transition-opacity duration-300">
        
        {/* Left Side */}
        <div className="hidden md:block md:w-1/2 relative bg-brand-900 order-2 md:order-1">
          <img 
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            src="./LINE_ALBUM_FINAL DESIGN 22042568_260420_1.jpg" 
            alt="Building View" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
              <h2 className="text-4xl font-bold mb-3 tracking-tight">ยกระดับมาตรฐานงานก่อสร้าง</h2>
              <p className="text-gray-200 text-[15px] leading-relaxed">
                  แพลตฟอร์มบริหารจัดการโครงการแบบครบวงจร<br/>
                  เชื่อมต่อการทำงาน ควบคุมคุณภาพ และส่งมอบความเป็นเลิศในทุกโครงการ
              </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 lg:p-14 relative order-1 md:order-2">
          <div className="w-full max-w-[360px] flex flex-col items-start justify-center mt-4 md:mt-0">
              <div className="w-full flex justify-center mb-10">
                  <img src="./Pichayamongkol_2-D1n1MbyP (1).png" alt="Pichayamongkol Construction Logo" className="w-full max-w-[320px] h-auto object-contain" referrerPolicy="no-referrer" />
              </div>

              <button disabled={loading} onClick={loginWithGoogle} type="button" className="w-full bg-white border border-gray-300 flex items-center justify-center h-12 rounded-xl hover:bg-gray-50 transition-colors shadow-sm group">
                  <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="Google Logo" className="h-6 sm:h-7 w-auto group-hover:scale-105 transition-transform" />
                  <span className="ml-3 font-medium text-gray-700">เข้าสู่ระบบด้วย Google</span>
              </button>

              <div className="flex items-center gap-4 w-full my-6">
                  <div className="w-full h-px bg-gray-200"></div>
                  <p className="whitespace-nowrap text-xs text-gray-400 font-medium uppercase tracking-wider">หรือทดสอบเข้าใช้งาน (MOCK LOGIN)</p>
                  <div className="w-full h-px bg-gray-200"></div>
              </div>

              {/* Quick Login Test Roles */}
              <div className="w-full mb-6">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      <button disabled={loading} onClick={() => quickLogin('admin')} className="text-[11px] font-medium py-1.5 px-2 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 rounded-lg transition-colors border border-slate-200 hover:border-brand-200 shadow-sm flex flex-col items-center">
                          <span className="font-bold">Admin</span><span className="text-[9px] text-slate-400">ผู้ดูแลระบบ</span>
                      </button>
                      <button disabled={loading} onClick={() => quickLogin('owner')} className="text-[11px] font-medium py-1.5 px-2 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 rounded-lg transition-colors border border-slate-200 hover:border-brand-200 shadow-sm flex flex-col items-center">
                          <span className="font-bold">Owner</span><span className="text-[9px] text-slate-400">เจ้าของบริษัท</span>
                      </button>
                      <button disabled={loading} onClick={() => quickLogin('engineer')} className="text-[11px] font-medium py-1.5 px-2 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 rounded-lg transition-colors border border-slate-200 hover:border-brand-200 shadow-sm flex flex-col items-center">
                          <span className="font-bold">Engineer</span><span className="text-[9px] text-slate-400">วิศวกร</span>
                      </button>
                      <button disabled={loading} onClick={() => quickLogin('architect')} className="text-[11px] font-medium py-1.5 px-2 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 rounded-lg transition-colors border border-slate-200 hover:border-brand-200 shadow-sm flex flex-col items-center">
                          <span className="font-bold">Architect</span><span className="text-[9px] text-slate-400">สถาปนิก</span>
                      </button>
                      <button disabled={loading} onClick={() => quickLogin('qs')} className="text-[11px] font-medium py-1.5 px-2 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 rounded-lg transition-colors border border-slate-200 hover:border-brand-200 shadow-sm flex flex-col items-center">
                          <span className="font-bold">QS / Office</span><span className="text-[9px] text-slate-400">ประเมินราคา</span>
                      </button>
                      <button disabled={loading} onClick={() => quickLogin('foreman')} className="text-[11px] font-medium py-1.5 px-2 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 rounded-lg transition-colors border border-slate-200 hover:border-brand-200 shadow-sm flex flex-col items-center">
                          <span className="font-bold">Foreman</span><span className="text-[9px] text-slate-400">โฟร์แมน</span>
                      </button>
                      <button disabled={loading} onClick={() => quickLogin('accountant')} className="text-[11px] font-medium py-1.5 px-2 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 rounded-lg transition-colors border border-slate-200 hover:border-brand-200 shadow-sm flex flex-col items-center">
                          <span className="font-bold">Accounting</span><span className="text-[9px] text-slate-400">ฝ่ายบัญชี</span>
                      </button>
                      <button disabled={loading} onClick={() => quickLogin('client')} className="text-[11px] font-medium py-1.5 px-2 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 rounded-lg transition-colors border border-slate-200 hover:border-brand-200 shadow-sm flex flex-col items-center sm:col-span-2">
                          <span className="font-bold">Client</span><span className="text-[9px] text-slate-400">ลูกค้า / ผู้ว่าจ้าง</span>
                      </button>
                  </div>
              </div>

              <p className="text-center w-full text-gray-500 text-sm mt-8">
                  ต้องการขอสิทธิ์เข้าใช้งานระบบ? <a className="font-medium text-brand-600 hover:text-brand-700 transition-colors" href="#">ติดต่อผู้ดูแลระบบ (Admin)</a>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
