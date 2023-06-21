import {defineComponent, renderSlot} from "vue"

export default defineComponent({
  // 从ctx中解构出来 slots
  setup(props, { slots }) {
    return () => (
      <div>
        { renderSlot(slots, 'default') }
        { slots.title?.() }
      </div>
    )
  }
})