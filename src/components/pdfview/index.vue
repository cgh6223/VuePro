<template>
  <div id="pdf-content">
  </div>

</template>
<script>
//const {PDFObject }=require("../../assets/js/pdfobject.js")
import pdf from "pdfobject";
export default {
  name: "pdfView",
  data() {
    return{

    }
  },
  beforeMount() {
    this.$nextTick(function() {
        let src = "http://meet.gygkzh.com/upload/"+this.$route.query.src;
        let option={ pdfOpenParams: { pagemode: "thumbs", navpanes: 0, toolbar: 0, statusbar: 0, view: "FitV" } };
        //console.log(this.$route.query.src);
      pdf.embed(src,"#pdf-content",option);
    });
  }
};
</script>
<style scoped>
#pdf-content {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0; 
  background: #999;
}
</style>