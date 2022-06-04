<template>
  <n-select
    v-model:value="value"
    multiple
    :render-tag="renderTag"
    :options="options"
  />
</template>

<script>
import { defineComponent, ref, h } from 'vue'
import { NTag } from 'naive-ui'

export default defineComponent({
  setup () {
    const renderTag = ({ option, handleClose }) => {
      return h(
        NTag,
        {
          type: option.type,
          closable: true,
          onClose: e => {
            e.stopPropagation()
            handleClose()
          }
        },
        { default: () => option.label }
      )
    }
    return {
      value: ref([]),
      options: [
        {
          label: 'Friend (1)',
          value: 'value1'
        }
      ],
      renderTag
    }
  }
})
</script>
