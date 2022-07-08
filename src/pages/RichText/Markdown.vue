<template>
    <vue-markdown-editor
      v-model="MarkdownText"
      height="100%"
      :disabled-menus="[]"
      @save = 'saveText'
      @upload-image="onUploadImage"
      ></vue-markdown-editor>
  </template>
  
  <script>
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import Prism from 'prismjs'
import axios from 'axios'
import auth from '@/utils/auth'
import { mapGetters } from 'vuex'
VueMarkdownEditor.use(vuepressTheme, { Prism, extend(md) {} })
export default {
    // computed: {
    //     ...mapGetters([
    //         'MarkdownText',
    //     ]),
    // },
     computed: {
        ...mapGetters([
            // 'MarkdownText',
        ]),
        MarkdownText:{
            get() {
                return this.$store.state.MarkdownText;
            },
            set(val) {
                this.$store.state.MarkdownText = val
            }
        }
    },
    components: { VueMarkdownEditor },
    mounted() {
        document.querySelector('.v-md-editor').style.height = document.body.offsetHeight - 50 + 'px'
    },
    methods: {
        //保存文本
        saveText() {
            // console.log(arguments[0]);
           this.$store.commit('saveMarkdownText', arguments[0])
        },
         // 上传图片
        onUploadImage(event, insertImage, files) {
            // console.log(files);
            const file = files[0],
                  path = process.env.VUE_APP_URL,
                  index = path.lastIndexOf("\/")
            let param = new FormData()
            param.append('image', file)
            // const config = { headers: {
            //   'Content-Type': 'multipart/form-data',
            //   'Authorization': auth.getToken()
            // } }
            // axios.post(`${path}doc/uploadfile/`, param, config).then(r => {
            //     if(r.data.code == 200) {
            //       const last = path.slice(0, index)
            //       insertImage({
            //           url: last + r.data.data.url,
            //           desc: files[0].name
            //       })
            //     }
            // }).catch(e => {
            //     this.Toast(2, '图片上传出了点小问题，请稍后重试')
            // })
        }
    }
  };
  </script>
  <style>
.vuepress-markdown-body h1{ font-size: 28px; }
.vuepress-markdown-body h2{ font-size: 26px; }
.vuepress-markdown-body h3{ font-size: 24px; }
.vuepress-markdown-body h4{ font-size: 22px; }
.vuepress-markdown-body h5{ font-size: 20px; }
.vuepress-markdown-body:not(.custom){padding: 5px 10px!important;}
  </style>
