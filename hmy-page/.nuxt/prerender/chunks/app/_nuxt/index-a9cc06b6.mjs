import { _ as __nuxt_component_0, a as __nuxt_component_1$1 } from './Sendmsg-6336ec9a.mjs';
import { useSSRContext, mergeProps } from 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'file:///workspaces/MartinFeineis.github.io/hmy-page/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main$2 = {
  data() {
    return {
      Name: "Martin Feineis",
      Description: "My experience with Golang, Vue.JS, and Nuxt.JS demonstrates my proficiency in developing and deploying web applications, while my knowledge of Terraform and infrastructure as code showcases my ability to automate infrastructure provisioning and management. I am proficient in Cloud Service providers like AWS, Azure, GCP and Linode. Expert skills in Linux, PowerShell, and Python highlight my expertise in scripting and automation, as well as my ability to work with a variety of operating systems and platforms. Overall, I bring a broad range of skills and expertise to any project, with a focus on leveraging technology to streamline development, deployment, and operations processes",
      pictures: [
        {
          id: "1",
          src: "https://www.404founders.com/picture1.jpeg",
          isActive: true,
          altText: "Celebrating Open Source Techonolgy for Enterprise"
        },
        {
          id: "2",
          src: "https://www.404founders.com/picture2.jpeg",
          isActive: false,
          altText: "Bewerbungsfoto"
        },
        {
          id: "3",
          src: "https://www.404founders.com/picture3.jpeg",
          isActive: false,
          altText: "Professional picture from company conference"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row g-0" }, _attrs))}><div class="col-md-4"><div id="carouselExample" class="carousel slide"><div class="carousel-inner"><!--[-->`);
  ssrRenderList($data.pictures, (picture) => {
    _push(`<div class="${ssrRenderClass([{ active: picture.isActive }, "carousel-item"])}"><img${ssrRenderAttr("src", picture.src)} class="img-thumbnail d-block w-100"${ssrRenderAttr("alt", picture.altText)}></div>`);
  });
  _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div></div><div class="col-md-8"><h1>${ssrInterpolate($data.Name)}</h1><p>${ssrInterpolate($data.Description)}</p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      jobs: [
        {
          id: "4",
          Company: "Cognizant",
          selectStr: "#Cognizant",
          Positions: [
            {
              id: "41",
              Title: "Lead Consultant",
              Responsibilities: "Wrote DO178C complaint Terraform IaC in AWS to for remote Pilots to communicate with unmanned aerial vehicles. Upskilled Engineering Team on Terraform basics industry best practices and CI/CD Implementations. Wrote HIPPA compliant serverless Cloudformation IaC and business logic in Python for Healthcare customers to solve crossstate plan coverage.",
              StartDate: "January 2021",
              EndDate: "present"
            }
          ]
        },
        {
          id: "3",
          Company: "Berkadia",
          selectStr: "#Berkadia",
          Positions: [
            {
              id: "31",
              Title: "SRE",
              Responsibilities: "Build Serverless Application for Mortgage Brokers to submit Property Data for commercial real estate developments.",
              StartDate: "May 2020",
              EndDate: "December 2020"
            },
            {
              id: "32",
              Title: "DevOps Engineer",
              Responsibilities: "Supporting, driving and reviewing Change Management and Implementation. Resolving Deployment issues in production on Windows Servers with Powershell.",
              StartDate: "June 2018",
              EndDate: "May 2020"
            }
          ]
        },
        {
          id: "2",
          Company: "Cloudmine",
          selectStr: "#Cloudmine",
          Positions: [
            {
              id: "21",
              Title: "SRE",
              Responsibilities: "Maintained and improved HIPAA compliant AWS Software with focus on high availability, and self-healing rapid failover processes.",
              StartDate: "April 2017",
              EndDate: "April 2018"
            }
          ]
        },
        {
          id: "1",
          Company: "PointIO",
          selectStr: "#PointIO",
          Positions: [
            {
              id: "11",
              Title: "DevOps Engineer",
              Responsibilities: "Build 1-click CI/CD Pipeline allowing globally distributed Engineers to deploy changes reliable into Development environments including rollback strategies.",
              StartDate: "Deember 2014",
              EndDate: "March 2017"
            }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($data.jobs, (job) => {
    _push(`<div><p><button class="btn btn-primary" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", job.selectStr)} aria-expanded="false" aria-controls="collapseExample">${ssrInterpolate(job.Company)}</button></p><div class="collapse"${ssrRenderAttr("id", job.Company)}><!--[-->`);
    ssrRenderList(job.Positions, (position) => {
      _push(`<div><div class="card card-body"><p><h5>${ssrInterpolate(position.Title)}</h5><p><small>Started: ${ssrInterpolate(position.StartDate)} Finished: ${ssrInterpolate(position.EndDate)}</small></p><p>${ssrInterpolate(position.Responsibilities)}</p></p></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Jobs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Profile = __nuxt_component_1;
  const _component_Sendmsg = __nuxt_component_1$1;
  const _component_Jobs = __nuxt_component_3;
  _push(`<!--[--><head><meta charset="UTF-8"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"><title>Resume Martin Feineis</title></head><div>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Profile, null, null, _parent));
  _push(ssrRenderComponent(_component_Sendmsg, { "to:martinfeineis": "" }, null, _parent));
  _push(ssrRenderComponent(_component_Jobs, null, null, _parent));
  _push(`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-a9cc06b6.mjs.map
