"use client";

import { MapPin, AlertTriangle, ExternalLink } from "lucide-react";

export default function Home() {
  const link = "https://surl.amap.com/1k287IY21ke3H";

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">电站位置获取方法</h1>
          <p className="mt-2 text-sm text-gray-600">
            请按照以下步骤精准上报充电桩位置
          </p>
        </div>

        {/* Warning Alert */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-md shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-orange-500" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-orange-700 font-bold">
                注意：定位时不要定位到商超或者社区，精准定位到充电桩所在位置！
              </p>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">1</span>
              第一步：获取定位
            </h3>
            <div className="mt-4 text-sm text-gray-500 space-y-4">
              <p>
                站在充电站旁边打开<strong>高德地图APP</strong>，地图放到最大，在
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mx-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  位置
                </span>
                旁长按，直至出现红色标记，点击分享即可。
              </p>
              {/* Image Step 1 */}
              <div className="w-full rounded-lg overflow-hidden border border-gray-200">
                 <img src="/images/1.png" alt="Step 1 Tutorial" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">2</span>
              第二步：复制链接
            </h3>
            <div className="mt-4 text-sm text-gray-500 space-y-4">
              <p>
                点击左下角分享按钮后，向左滑动找到“复制链接”选项，再返回到表格，粘贴链接。
              </p>
              
              {/* Link Example Area */}
              <div className="mt-2 p-3 bg-gray-100 rounded-md">
                <span className="text-xs text-gray-500 block mb-1">链接示例：</span>
                <code className="text-xs text-gray-800 break-all">{link}</code>
              </div>

              {/* Image Step 2 */}
              <div className="w-full rounded-lg overflow-hidden border border-gray-200">
                 <img src="/images/2.png" alt="Step 2 Tutorial" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Video Tutorial */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">视频教程</h3>
                <a 
                    href="https://share.plvideo.cn/front/video/view?vid=zdceb3cb56666b8c8e904a29048c4403_z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full p-4 border-2 border-dashed border-blue-300 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors"
                >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    点击观看视频教程
                </a>
            </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-m text-gray-500 pb-8">
          <p>备注：表格提交完成后，审核时间预计一天</p>
        </div>
      </div>
    </main>
  );
}
