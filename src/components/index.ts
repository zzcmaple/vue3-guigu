import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  install(vue: any) {
    // 批量导入当前文件所在目录下的.vue文件
    const options: any = import.meta.globEager('./*vue')

    Object.keys(options).forEach((key) => {
      const componentName = key.replaceAll('./', '').replaceAll('.vue', '')
      vue.component(componentName, options[key].default)
    })
    // 将element-plus的图标导入到全局
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      vue.component(key, component)
    }
  },
}
