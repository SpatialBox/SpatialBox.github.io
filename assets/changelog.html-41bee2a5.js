import{_ as i,o as l,c as r,a as e}from"./app-c80e1060.js";const a={},t=e('<h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><h4 id="ver-1-1-0-2024-6-29" tabindex="-1"><a class="header-anchor" href="#ver-1-1-0-2024-6-29" aria-hidden="true">#</a> Ver 1.1.0 - 2024.6.29</h4><ul><li>修复软件狗失效问题</li><li>功能启动速度优化</li><li>修复启动器飞时达冲突误报问题，修复部分已知插件冲突</li><li>修复属性表 Ctrl+C 复制整行问题</li><li>修复打印机添加纸张和自适应纸张无效问题</li></ul><h4 id="ver-1-1-0-2024-6-29-1" tabindex="-1"><a class="header-anchor" href="#ver-1-1-0-2024-6-29-1" aria-hidden="true">#</a> Ver 1.1.0 - 2024.6.29</h4><ul><li>支持AutoCAD2025，目前支持AutoCAD2013-2025</li><li>优化高分辨率屏幕显示效果</li><li>添加 Sqlite 格式支持</li><li>优化 大影像，支持调整绘图顺序</li><li>优化 报备工具，修复小数位、换行、编码等问题</li><li>分割面支持二维多段线</li><li>优化 &quot;关于&quot; 信息，使用三位版本号，模块调整</li><li>修复 坐标注记（ZBZJ）三维多段线报错问题</li><li>修复锁定的图层使用字段计算器报错问题</li><li>修复导出属性表图层名过长报错问题</li><li>修复三维多段线转为多段线问题</li><li>修复图层锁定时字段管理器刷新问题</li></ul><h4 id="ver-1-0-2-0-2024-4-22" tabindex="-1"><a class="header-anchor" href="#ver-1-0-2-0-2024-4-22" aria-hidden="true">#</a> Ver 1.0.2.0 - 2024.4.22</h4><ul><li>修复 字段计算器 部分函数无效问题</li><li>优化 SetXdata 函数，改用尖括号匹配，支持内置表达式</li><li>修复 调整起点和西北点 问题</li><li>优化 批量插入dwg，支持原有尺寸插入，支持图框开关</li><li>检测并提醒和飞时达的冲突</li><li>修复 Ribbon 菜单部分命令失效问题</li><li>优化 导出CSV ，支持导出点 XYZ 值</li><li>多段线折点转点，支持输出为CSV</li><li>修复 KML 图层名称异常字符问题</li><li>优化 栅格处理工具，支持波段设置</li><li>优化 影像裁剪，支持多部件，支持洞</li><li>添加 批量输出栅格属性 工具</li><li>修复选目录无法获取目录内文件问题</li><li>修复空间选择报错问题，默认启用多线程，效率优化</li><li>更新部分图源，通过 图源管理 - 默认图源 添加（为避免重复，添加前可先全选删除已有图源）</li><li>修复部分登陆出错问题</li></ul><h4 id="ver-1-0-1-3-2024-4-7" tabindex="-1"><a class="header-anchor" href="#ver-1-0-1-3-2024-4-7" aria-hidden="true">#</a> Ver 1.0.1.3 - 2024.4.7</h4><ul><li>优化 <strong>标注管理器（LM）</strong>，支持点，线，面标注</li><li>影像处理支持 <strong>分辨率设置</strong>，可用于栅格重采样、压缩等</li><li>裁剪存盘支持设置绘图顺序</li><li>优化 空间分析 ，边界几何支持属性继承</li><li>修复 <strong>空间选择(KJXZ)</strong> 报错问题</li><li>优化 Kml 导出，加入 <strong>允许插值显示</strong> 选项，以贴合地面</li><li>优化 <strong>快捷命令管理器(PGP)</strong>，允许禁用命令</li><li>新增 <strong>擦除面</strong> 工具</li><li>优化 <strong>分割面</strong> 支持多选</li></ul><h4 id="ver-1-0-1-2-2024-3-27" tabindex="-1"><a class="header-anchor" href="#ver-1-0-1-2-2024-3-27" aria-hidden="true">#</a> Ver 1.0.1.2 - 2024.3.27</h4><ul><li>新增 <strong>选线分割面</strong> 功能，可选线批量进行面分割，命令 CCP</li><li>优化 <strong>在线地图</strong> ，可设置坐标系经纬度范围以处理跨带问题，添加部分图源</li><li>支持识别部分奥维二维码图源，位于：图源管理-奥维图源(beta)</li><li>优化 <strong>影像处理</strong>，支持BigTiff等选项，地图下载支持压缩</li><li>优化 <strong>属性表</strong>，支持显示字段别名：全局配置-属性表配置-显示字段别名</li><li>优化 <strong>字段管理器</strong>，可修改字段可见性，属性表将只显示可见字段</li><li>支持 <strong>自定义坐标系</strong> 保存收藏</li><li>修复 简化线JHX 后，CASS添加节点失败问题</li><li>修复字段计算器计算多值出错问题</li></ul><h4 id="ver-1-0-1-1-2024-3-21" tabindex="-1"><a class="header-anchor" href="#ver-1-0-1-1-2024-3-21" aria-hidden="true">#</a> Ver 1.0.1.1 - 2024.3.21</h4><ul><li>新增 <strong>文字去重</strong> 工具，可批量删除重叠的文字</li><li>优化 <strong>构建边界</strong> 工具，支持按距离采样</li><li>修复 <strong>大影像</strong> 保存后重开报错问题</li><li>优化 <strong>影像合并、拆分、导出</strong>等工具，加入 <strong>压缩方式</strong> 选项，以处理影像过大问题</li><li><strong>KML</strong> 导出符号优化</li></ul><h4 id="ver-1-0-1-0-2024-3-14" tabindex="-1"><a class="header-anchor" href="#ver-1-0-1-0-2024-3-14" aria-hidden="true">#</a> Ver 1.0.1.0 - 2024.3.14</h4><ul><li>添加 ArcGIS <strong>历史影像</strong>，添加 Bing 卫星图</li><li>修复部分地图下载后局部缺失问题</li><li>优化 <strong>数据导出</strong>，支持自适应导出，闭合多段线导出为面，否则为线</li><li>优化 <strong>拓扑检查</strong>，支持自定义点线面，支持更多检查规则（注意：更新后不再支持之前的规则配置）</li><li>修复 <strong>栅格合并</strong> 瞬间完成不报错的问题</li><li>修复导出 Shp 乱码问题</li><li>修复 导入报备数据 乱码问题</li><li>优化 简化线，支持二维多段线</li></ul><h4 id="ver-1-0-0-1-2024-2-21" tabindex="-1"><a class="header-anchor" href="#ver-1-0-0-1-2024-2-21" aria-hidden="true">#</a> Ver 1.0.0.1 - 2024.2.21</h4><ul><li>修复 Bug</li></ul><h4 id="ver-1-0-0-0-2024-2-3" tabindex="-1"><a class="header-anchor" href="#ver-1-0-0-0-2024-2-3" aria-hidden="true">#</a> Ver 1.0.0.0 - 2024.2.3</h4><ul><li><strong>启用网络版授权</strong>：网络版通过手机号注册，登录即可使用；</li><li><strong>启用软件锁授权</strong>：软件锁即插即用，用于离线使用；</li><li><strong>停止QQ和硬件版的授权</strong>，请QQ用户注册新版本后，将注册手机号及QQ号发给管理员，获取网络版授权；</li><li>添加 <strong>自动构面</strong> 功能，可自动分析岛，构建含洞多边形，命令 ZDGM；</li><li>添加 <strong>环境参数</strong> 设置，图层导出时可通过设置环境参数将图元转为 点，线，面；</li><li>优化 <strong>空间连接</strong> ，支持块，填充等图元，支持自定义点线面操作，完善参数，支持右键全选；</li><li>优化 <strong>拓扑验证</strong> ，修复已知问题，提高效率；</li><li>优化 <strong>坐标导入</strong>，优化大数据量支持，优化速度；</li><li>优化 <strong>属性计算器</strong>，加入块Z值计算；</li><li>优化 <strong>坐标注记</strong>，支持经纬度注记；</li></ul><h4 id="ver-0-9-7-1-2023-11-24" tabindex="-1"><a class="header-anchor" href="#ver-0-9-7-1-2023-11-24" aria-hidden="true">#</a> Ver 0.9.7.1 - 2023.11.24</h4><ul><li>属性表新增字段统计、汇总工具</li><li>支持多部件合并，多部件和多段线合并，优化多部件标注</li><li>新增【坐标导入】工具，可导入 csv、txt、dat、xls等格式的点坐标，命令 ZBDR</li><li>影像图层增加【属性】功能，可查看影像基本信息</li><li>优化【拓扑检查】过滤器，支持 按属性选择 语法</li><li>修复在线地图部分行政区域缺失问题，支持搜索</li><li>导出影像支持投影变换</li></ul><h4 id="ver-0-9-6-1-2023-11-12" tabindex="-1"><a class="header-anchor" href="#ver-0-9-6-1-2023-11-12" aria-hidden="true">#</a> Ver 0.9.6.1 - 2023.11.12</h4><ul><li>新增【栅格裁剪】工具，可批量裁剪多张栅格图像，命令 CIMG</li><li>栅格处理系列工具参数优化，增加可配置项目</li><li>工具箱优化，可收起，支持自定义图标</li><li>打印工具优化，可指定铺满图纸或缩放至指定倍率</li></ul><h4 id="ver-0-9-6-0-2023-11-02" tabindex="-1"><a class="header-anchor" href="#ver-0-9-6-0-2023-11-02" aria-hidden="true">#</a> Ver 0.9.6.0 - 2023.11.02</h4><ul><li>新增【属性计算器】，可通过计算字段的方式批量修改实体属性</li><li>优化【字段标注】，可标注重量线，表达式支持SOUTH；</li><li>优化【图层列表】，支持多选批量调整图层状态</li><li>优化【工具箱】，支持折叠</li><li>优化【空间连接】文字内容提取到面，可提取多个文字</li><li>优化【属性值】面板，修复</li><li>优化【影像合并】【影像裁剪】等栅格工具；</li></ul><h4 id="ver-0-9-5-0-2023-10-15" tabindex="-1"><a class="header-anchor" href="#ver-0-9-5-0-2023-10-15" aria-hidden="true">#</a> Ver 0.9.5.0 - 2023.10.15</h4><ul><li>新增【坐标转换】功能，支持投影变换、四参数转换、七参数转换，命令 ZBZH；</li><li>新增【坐标注记】功能，命令 ZBZJ，支持批量注记；</li><li>新增【边长注记】功能，命令 BCZJ；</li><li>新增【工具箱自定义】功能，可自定义命令到工具箱；</li><li>窗体新增【帮助】按钮，可快速定位在线帮助；</li><li>修复部分命令卡死和冲突问题，部分功能优化；</li><li>修复部分QQ授权失效问题；</li><li>启动器中加入【卸载】功能；</li></ul><h4 id="ver-0-9-4-0-2023-09-21" tabindex="-1"><a class="header-anchor" href="#ver-0-9-4-0-2023-09-21" aria-hidden="true">#</a> Ver 0.9.4.0 - 2023.09.21</h4><ul><li>新增【在线地图】行政区域相关功能，可直接查看行政界线</li><li>修复【在线地图】部分图源投影后背景不透明问题，优化墨卡托中国坐标系的精度和速度</li><li>下载【在线地图】支持多部件</li><li>修复【空间连接】文字为图斑赋值时，因用户字体缺失导致的问题</li></ul><h4 id="ver-0-9-3-2-2023-09-05" tabindex="-1"><a class="header-anchor" href="#ver-0-9-3-2-2023-09-05" aria-hidden="true">#</a> Ver 0.9.3.2 - 2023.09.05</h4><ul><li>修复部分在线地图投影后颜色变红问题</li><li>坐标系选择界面加入【图层】节点，便于直接选取图层的空间参考</li><li>修复部分新设备授权失败问题</li></ul><h4 id="ver-0-9-3-1-2023-09-01" tabindex="-1"><a class="header-anchor" href="#ver-0-9-3-1-2023-09-01" aria-hidden="true">#</a> Ver 0.9.3.1 - 2023.09.01</h4><ul><li>支持多部件标注，支持保存和加载标注配置</li><li>新增【沿线注记】工具，命令 <code>LLF</code>,可沿多段线标注指定字段</li><li>新增【梯形分幅】工具，命令 <code>GGT</code>，可构建标准分幅图</li><li>新增【构建光栅结合图】工具，命令 <code>BIMGE</code>，无需加载图像即可构建结合图</li><li>添加了部分 <strong>天地图</strong> 和 <strong>星图地球</strong> 图源</li><li>修复【在线地图】部分投影范围出错问题</li><li>修复多部件多边形导入 Hatch 失败的问题</li><li>修复部分电脑加载后提示“未知命令”问题</li></ul><h4 id="ver-0-9-3-0-2023-08-22" tabindex="-1"><a class="header-anchor" href="#ver-0-9-3-0-2023-08-22" aria-hidden="true">#</a> Ver 0.9.3.0 - 2023.08.22</h4><ul><li>优化【KML】导入导出，支持 ArcGIS 导出的KML字段，支持字段描述</li><li>修复【TileMap】导出图源失败问题，界面优化</li><li>新增【简化面】功能，可在简化时维持相邻面拓扑结构</li><li>优化【矩形分幅】工具，添加选项和比例尺</li><li>优化【拓扑检查】，加入进度提示与结果排序，叠加检查性能优化</li><li>优化 Windows 缩放导致的一些问题，指南搜索关键词DPI查看</li><li>提供【在线指南】，命令 <code>SHELP</code></li></ul><h4 id="ver-0-9-2-6-2023-07-16" tabindex="-1"><a class="header-anchor" href="#ver-0-9-2-6-2023-07-16" aria-hidden="true">#</a> Ver 0.9.2.6 - 2023.07.16</h4><ul><li>新增对【GeoPackage】矢量格式的读写支持</li><li>新增【属性块】相关功能，可将属性块内容提取到字段，将字段内容更新到属性块</li><li>新增【启动图标】，位于CAD状态栏右下角，点击可快速开关内容列表</li><li>优化【工具箱】，可通过首字母打开工具集，如：栅格工具(SG)，属性管理(SX)</li><li>优化【多部件块】，可双击直接进行编辑（或命令BBE编辑）</li><li>优化【全局设置】，去掉一些无用的项</li><li>优化【快捷命令】，PGP 查看</li></ul><h4 id="ver-0-9-2-5-2023-06-27" tabindex="-1"><a class="header-anchor" href="#ver-0-9-2-5-2023-06-27" aria-hidden="true">#</a> Ver 0.9.2.5 - 2023.06.27</h4><ul><li>新增【高清截图】功能，可截取不同尺寸及分辨率图片，支持批量截取，命令 GQJT</li><li>新增【土地报备】相关功能，可导入导出报备坐标文件，命令 BBDR，BBDC</li><li>优化【批量打印】系列工具，支持纸张自适应图框</li><li>优化【挂接外部数据】，支持加载和保存配置，支持追加字段</li><li>优化【内容列表】，鼠标中键单击可改变面板停靠方式</li><li>修复【批量插入DWG】同名块插入错误问题</li><li>修复【光栅图像】加载错误问题，对支持的格式进行检查提示</li></ul><h4 id="ver-0-9-2-4-2023-06-05" tabindex="-1"><a class="header-anchor" href="#ver-0-9-2-4-2023-06-05" aria-hidden="true">#</a> Ver 0.9.2.4 - 2023.06.05</h4><ul><li>新增 【字段转文字】 功能，可将文字内容修改为指定字段值，命令 ZDZWZ</li><li>优化 【空间选择】 工具，添加 要素边界 相关空间关系</li><li>修复字段内容过长导致的截取问题，优化属性表</li><li>修复字段计算器代码块问题，计算速度优化</li><li>修复【挂接外部数据】字段类型不匹配问题</li><li>优化【合并为多部件】工具，多部件属性继承自最大面</li><li>优化启动器，启动器和【关于】界面可检查下载最新版本</li></ul><h4 id="ver-0-9-2-3-2023-05-21" tabindex="-1"><a class="header-anchor" href="#ver-0-9-2-3-2023-05-21" aria-hidden="true">#</a> Ver 0.9.2.3 - 2023.05.21</h4><ul><li>字段计算器添加 Area，Length 等函数</li><li>添加【挂接外部数据】功能，命令 GJSJ</li><li>调整图源管理方式，可直接拖动LRC加载图源（优化中...）</li><li>修复打印工具，按范围打印自适应打印范围</li><li>修复 影像合并 失败问题</li><li>工具箱修改为选项卡结构</li></ul><h4 id="ver-0-9-2-2-2023-04-28" tabindex="-1"><a class="header-anchor" href="#ver-0-9-2-2-2023-04-28" aria-hidden="true">#</a> Ver 0.9.2.2 - 2023.04.28</h4><ul><li>安装包拆分为32位和64位版本，独立发布</li><li>提供便携版本，安装卸载更加方便快捷</li><li>添加对 AutoCAD2023-2024 的支持，目前支持 AutoCAD2013-2024 所有版本</li><li>字段计算器支持自定义函数（类似ArcGIS的代码块）</li><li>字段计算器添加 GetXdata 和 SetXdata 函数，用于直接提取和计算扩展属性</li><li>优化属性表速度，属性选择视图和CAD选择集维持一致</li><li>修改多值字段编辑方式，双击可直接编辑（如 SOUTH 字段）</li><li>矢量和栅格支持批量加载</li><li>在线地图动态投影支持自定义坐标系</li><li>修复下载的 TIFF 无法通过光栅图像加载的问题</li><li>添加“快捷命令编辑器”，位于：工具箱-&gt;快捷命令</li><li>添加传统菜单栏，同步工具箱所有功能，命令 SMENU 开启</li><li>添加 填充合并 ，填充拆分 功能；</li><li>优化启动工具，优化加载速度</li><li>提供QQ授权功能，用于跨设备使用</li></ul><h4 id="ver-0-9-2-1-2023-03-13" tabindex="-1"><a class="header-anchor" href="#ver-0-9-2-1-2023-03-13" aria-hidden="true">#</a> Ver 0.9.2.1 - 2023.03.13</h4><ul><li>支持 AutoCAD2013-2022 所有版本</li><li>在线地图速度优化，投影校正优化</li><li>在线地图下载功能优化，自动校正火星坐标系图源</li><li>添加了一些在线地图图源</li><li>影像加载和浏览速度优化</li><li>新增影像导出功能（格式转换）</li><li>新增影像分割，合并功能</li><li>新增影像轮廓提取功能</li><li>新增光栅图像轮廓自适应功能</li><li>更多栅格格式的支持（tif,img,gpkg,vrt,jpg,jg2,png,sqlite,mbtile,hdr,ehdr）</li><li>新增对文件地理数据库（GDB）弧段的支持</li><li>支持多部件多边形</li><li>支持图层投影定义</li><li>支持导入导出时进行投影变换</li><li>优化对中文路径和中文字符串的支持</li><li>新增对CSV文件支持</li><li>属性表速度优化</li><li>字段计算器功能扩展，增加支持的语法，可执行更复杂的计算任务</li><li>新增&quot;输入拦截&quot;功能，自动切换英文输入法</li><li>新增构建结合图表功能（GGG）</li><li>优化快捷键模块，避免和PGP文件冲突</li><li>绘图模块优化</li></ul>',47),n=[t];function h(d,s){return l(),r("div",null,n)}const g=i(a,[["render",h],["__file","changelog.html.vue"]]);export{g as default};
