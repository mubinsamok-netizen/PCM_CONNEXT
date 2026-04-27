import React from 'react';
import { Project } from '../../types';

export const DetailsTab = ({ project }: { project: Project }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800">ข้อมูลรายละเอียดโครงการ</h2>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Col 1 */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">รหัสโครงการ (Project Code)</p>
                <p className="text-base md:text-lg font-semibold text-gray-900">{project.code || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">ชื่อโครงการ (Project Name)</p>
                <p className="text-base md:text-lg font-semibold text-gray-900">{project.name || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">เจ้าของโครงการ (Client/Owner)</p>
                <p className="text-base md:text-lg font-semibold text-gray-900">{project.owner || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">เลขที่สัญญา (Contract No.)</p>
                <p className="text-base md:text-lg font-semibold text-gray-900">{project.contract || '-'}</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1.5">ประเภทโครงการ (Type)</p>
                <div className="inline-flex">
                  <span className="px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">{project.type || '-'}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">ที่ตั้งโครงการ (Location)</p>
                <p className="text-base md:text-lg font-semibold text-gray-900 mb-1">{project.location || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1.5">เบอร์ติดต่อโครงการ (Site Contact)</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100">
                    <svg className="w-4 h-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <p className="text-base md:text-lg font-semibold text-gray-900">{project.phone || '-'}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1.5">ลิงก์สถานที่ (Google Maps / Link)</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-brand-600 bg-brand-50 border border-brand-100 hover:bg-brand-100 hover:text-brand-700 transition-colors shadow-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  เปิดแผนที่
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
