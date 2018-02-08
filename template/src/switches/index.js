import Hello from '@/hello/index';

const Deptree = {
  Hello
};
let MAP = {};    // 模块依赖树
let PathMap = [];   // 最终路由配置 - 根据模块依赖计算得出
let moduleStores = {};

// 根据页面配置，计算依赖组件加载
function generateDep (config) {
  var i =0,
      len;

  if(!config){
    console.warn('没有配置页面模块依赖信息');
    return false;
  }
  config = config.split(',');
  len = config.length;

  if(len < 1){
    console.warn('没有配置页面模块依赖信息');
  }else{
    console.table(config);
    for (; i<len; i++) {
      if( Deptree[config[i]] ){
        MAP[config[i]] = Deptree[config[i]];
      }else{
        console.error(config[i], '组件库不存在该组件');
      }
    }
  }
}

// 根据依赖组件，计算路由配置
function generateMap () {
  let i;
  let tmp;

  for (i in MAP) {
    if (MAP.hasOwnProperty(i)) {
      tmp = MAP[i].routers;
      tmp = tmp ? tmp: MAP[i];
      if( tmp.push && tmp.forEach ){
        tmp.forEach(n => {
          PathMap.push(n);
        });
      } else {
        console.error('未配置路由的组件：');
        console.error(tmp);
      }
    }
  }
}

// 根据依赖组件，计算整体的module_store
function generateStores () {
  let i;
  let tmp;

  for (i in MAP) {
    if (MAP.hasOwnProperty(i)) {
      tmp = MAP[i].stores;
      if(tmp){
        moduleStores[i] = tmp;
      }else{
        console.warn(i + ' 未配置组件的共享store。');
      }
    }
  }
}

generateDep(window.config.modules);   // 计算组件依赖树
generateMap();                        // 计算路由结果
generateStores();                     // 计算组建数据状态
export default {
  routers: PathMap,
  stores: moduleStores
};
