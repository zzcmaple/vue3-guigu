export default {
  install(vue) {
    // 批量导入当前文件所在目录下的.vue文件
    const options = import.meta.globEager('./*vue')

    Object.keys(options).forEach(key => {
      const componentName = key.replaceAll('./', '').replaceAll('.vue', '')
      vue.component(componentName, options[key].default)
    })
  }
}
