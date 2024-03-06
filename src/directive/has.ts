import pinia from '@/store'
import useUserStore from '@/store/modules/user'
import { DirectiveBinding } from 'vue'

const userStore = useUserStore(pinia)
export const isHasButton = (app: any) => {
  //获取对应的用户仓库
  //全局自定义指令:实现按钮的权限
  app.directive('has', {
    //代表使用这个全局自定义指令的DOM|组件挂载完毕的时候会执行一次
    mounted(el: any, options: any) {
      //自定义指令右侧的数值:如果在用户信息buttons数组当中没有
      //从DOM树上干掉
      if (!userStore.buttons.includes(options.value)) {
        el.parentNode.removeChild(el)
      }
    },
  })
}

// 自定义滚动条
export const myScroll = {
  mounted(el: HTMLElement, binding: DirectiveBinding<any>) {
    const self = binding.instance // this
    const target = el.querySelector('.el-table__body-wrapper')
    if (!target) return

    target.addEventListener('scroll', () => {
      // 滚动到底部
      if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
        if (self.over >= self.dataList.length) {
          return
        }
        self.over += 15
      }
    })
  },
}
