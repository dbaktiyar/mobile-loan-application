<template>
  <div>
    <!-- <button @click="saveFile">save</button> -->
    <div id="container"></div>
  </div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import RawTool from "@editorjs/raw";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Quote from "@editorjs/quote";

export default {
  name: "NodeDescription",
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    this.editor = new EditorJS({
      holderId: "container",
      autofocus: true,
      placeholder: 'Paste image URL',
      tools: {
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H"
        },
        quote: Quote,
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: "http://localhost:8008/fetchUrl" // Your backend endpoint for url data fetching
          }
        },
        raw: RawTool,
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
              byUrl: "http://localhost:8008/fetchUrl" // Your endpoint that provides uploading by Url
            }
          }
        },
        list: {
          class: List,
          inlineToolbar: true
        },
        embed: Embed
      }
    });
  },
  methods: {
    saveFile() {
      this.editor
        .save()
        .then(outputData => {
          console.log("Article data: ", outputData);
        })
        .catch(error => {
          console.log("Saving failed: ", error);
        });
    }
  }
};
</script>

<style scoped>
#container {
  text-align: left;
  padding: 0 20px;
}
</style>
