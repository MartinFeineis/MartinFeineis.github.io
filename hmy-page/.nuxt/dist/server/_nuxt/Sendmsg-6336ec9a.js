import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg bg-body-tertiary" }, _attrs))}><div class="container-fluid"><a class="navbar-brand" href="#">Navbar</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li><li class="nav-item"><a class="nav-link" href="/message">Messaging Service</a></li></ul></div></div></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      showTo: false,
      showFrom: true,
      showMsg: true,
      sender: "",
      recipient: "ich",
      message: "",
      sentMsgId: 0
    };
  },
  props: {
    to: {
      type: String,
      default: "martinfeineis"
    },
    from: {
      type: String,
      default: "anonymous"
    },
    readId: {
      type: Number
    }
  },
  methods: {
    async uploadMessage() {
      var msgBody = { "Sender": this.sender, "Recipient": this.recipient, "Message": this.message };
      var url = "https://api.404founders.com/send";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(msgBody)
      });
      const data = await res.json();
      this.sentMsgId = data.MsgId;
      console.log(this.msgIds);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><p><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Contact Me </button></p><div class="collapse" id="collapseExample"><div class="card card-body"><form><div style="${ssrRenderStyle($data.showFrom ? null : { display: "none" })}" class="input-group mb-3"><span class="input-group-text" id="basic-addon1">From: </span><input${ssrRenderAttr("value", $data.sender)} type="text" class="form-control" placeholder="Sender" aria-label="Sender" aria-describedby="basic-addon1"></div><div style="${ssrRenderStyle($data.showTo ? null : { display: "none" })}" class="input-group mb-3"><span class="input-group-text" id="basic-addon1">To: </span><input${ssrRenderAttr("value", $data.recipient)} type="text" class="form-control" placeholder="Recipient" aria-label="Recipient" aria-describedby="basic-addon1"></div><div style="${ssrRenderStyle($data.showMsg ? null : { display: "none" })}" class="input-group"><span class="input-group-text">Message </span><textarea class="form-control" aria-label="With textarea">${ssrInterpolate($data.message)}</textarea></div><button type="submit" class="btn btn-primary">Submit</button></form><div style="${ssrRenderStyle($data.sentMsgId != 0 ? null : { display: "none" })}"><p>Your message Id is: ${ssrInterpolate($data.sentMsgId)}</p></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sendmsg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _,
  __nuxt_component_1 as a
};
//# sourceMappingURL=Sendmsg-6336ec9a.js.map
