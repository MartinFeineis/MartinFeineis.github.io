import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Sendmsg-6336ec9a.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, mergeProps } from 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/ofetch/dist/node.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/hookable/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/unctx/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/h3/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/unhead/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/ufo/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/destr/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/scule/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/klona/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/ohash/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/unstorage/dist/index.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/unstorage/drivers/fs.mjs';
import 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/radix3/dist/index.mjs';

const _sfc_main$1 = {
  data() {
    return {
      msgIds: [],
      nextMsg: "",
      nextId: 0
    };
  },
  methods: {
    async fetchGitHubUsers() {
      console.log(this.msgIds);
      const res = await fetch("https://api.404founders.com/read/" + this.nextMsg);
      const data = await res.json();
      let Msg = { Id: data.MsgId.Item.MsgID.N, number: this.nextId, Text: data.MsgId.Item.Message.S, Sender: data.MsgId.Item.Sender.S, Recipient: data.MsgId.Item.Recipient.S };
      this.nextId += 1;
      this.msgIds.push(Msg);
      console.log(data);
      return Msg;
    },
    async onSubmit(e) {
      this.users = await this.fetchGitHubUsers();
    },
    deleteMsg(rownumber) {
      console.log("Deleting: " + rownumber);
      this.msgIds = this.msgIds.filter((msg) => msg.number !== rownumber);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><form><div class="mb-3"><input${ssrRenderAttr("value", $data.nextMsg)} type="text" class="form-control"></div><button type="submit" class="btn btn-primary">Submit</button></form><table class="table"><thead><tr><th scope="col">Msg #</th><th scope="col">Sender</th><th scope="col">Recipient</th><th scope="col">Text</th><th scope="col">Delete</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.msgIds, (msg) => {
    _push(`<tr><td>${ssrInterpolate(msg.Id)}</td><td>${ssrInterpolate(msg.Sender)}</td><td>${ssrInterpolate(msg.Recipient)}</td><td>${ssrInterpolate(msg.Text)}</td><td><button class="btn btn-danger">X</button></td></tr>`);
  });
  _push(`<!--]--></tbody></table><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Msgreader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Sendmsg = __nuxt_component_1;
  const _component_Msgreader = __nuxt_component_2;
  _push(`<html${ssrRenderAttrs(mergeProps({ lang: "en" }, _attrs))}><head><meta charset="UTF-8"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"><title>Resume Martin Feineis</title></head><body><div>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Sendmsg, null, null, _parent));
  _push(ssrRenderComponent(_component_Msgreader, null, null, _parent));
  _push(`</div><script type="module" src="/nested/src/main.js"><\/script><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script></body></html>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/message.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const message = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { message as default };
//# sourceMappingURL=message-daa2944c.mjs.map
