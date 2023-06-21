import {defineComponent, reactive, ref, withModifiers} from "vue";
import style from './About.module.scss'
import Vslot from "@/components/Vslot.tsx";
export default defineComponent({
  name: 'About',
  setup() {
    const text = ref('text value')
    const visible = ref(true)
    const list = reactive([1, 2, 3, 4, 5])
    const obj = reactive({
      name: 'obj name',
    })
    const slots = {
      default: () => <div>default</div>,
    }
    return () => (
      <div>
        <h1 style={{ color: 'red' }} class={[style.header, style.headerBg]}>About</h1>
        <div v-text={text.value} class={`${style.header} ${style.headerBg}`}></div>
        <div v-html={text.value}></div>
        <div>{text.value}</div>
        <div v-show={visible.value}>{text.value}</div>
        <h2>v-if、v-else-if、v-else无法直接使用，需要使用&& || ?: 实现条件渲染</h2>
        {
          visible.value && <div>{text.value}</div>
        }
        <h2>v-for无法直接使用，需要使用map去实现循环遍历</h2>
        {
          list.map(item => <div key={item}>{item}</div>)
        }
        <h2>v-on使用原生事件处理方式，需要使用事件修饰符使用withModifiers，withModifiers 方法接收两个参数，第一个参数是绑定的事件，第二个参数是需要使用的事件修饰符</h2>
        <br/>
        <button onClick={withModifiers(() => { console.log('click') }, ['stop', 'prevent'])}>click</button>
        {/*  v-model */}
        <h2>注释使用 {'{'}/*  v-model */ {'}'}</h2>
        <h2>v-model</h2>
        input: <input type="text" v-model={text.value}/>
        input: <input type="text" v-model={obj.name}/>
        input: <input type="text" v-model={[obj.name, 'name', ['trim']]}/>
        <h2>v-bind：属性名={'{'}变量名 {'}'}</h2>
        <h2>v-slot</h2>
        <Vslot v-slots={{
          default: () => <div>default</div>,
          title: () => <div>title</div>
        }}/>
        Vslot: <Vslot v-slots={slots}/>
      </div>
    )
  }
})