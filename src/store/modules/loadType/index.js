import {getOrgTree, getPost, getTypeListByCode, getRegion,getCascaderType} from '../../../api/webapi-sys.js'

const module = {
  namespaced: true,
  state: {
    //组织
    organizeList: [],
    //岗位
    positionList: [],
    //行政区
    region: [
      {
        "keyid": "110000",
        "label": "北京市",
        "pkeyid": "0000",
        "code": "",
        "children": ""
      },
      {
        "keyid": "120000",
        "label": "天津市",
        "pkeyid": "0000",
        "code": "",
        "children": ""
      },
      {
        "keyid": "130000",
        "label": "河北省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "130100",
            "label": "石家庄市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "130102",
                "label": "长安区",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130104",
                "label": "桥西区",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130105",
                "label": "新华区",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130107",
                "label": "井陉矿区",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130108",
                "label": "裕华区",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130109",
                "label": "藁城区",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130110",
                "label": "鹿泉区",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130111",
                "label": "栾城区",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130121",
                "label": "井陉县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130123",
                "label": "正定县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130125",
                "label": "行唐县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130126",
                "label": "灵寿县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130127",
                "label": "高邑县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130128",
                "label": "深泽县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130129",
                "label": "赞皇县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130130",
                "label": "无极县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130131",
                "label": "平山县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130132",
                "label": "元氏县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130133",
                "label": "赵县",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130183",
                "label": "晋州市",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130184",
                "label": "新乐市",
                "pkeyid": "130100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "130200",
            "label": "唐山市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "130202",
                "label": "路南区",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130203",
                "label": "路北区",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130204",
                "label": "古冶区",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130205",
                "label": "开平区",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130207",
                "label": "丰南区",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130208",
                "label": "丰润区",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130209",
                "label": "曹妃甸区",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130223",
                "label": "滦县",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130224",
                "label": "滦南县",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130225",
                "label": "乐亭县",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130227",
                "label": "迁西县",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130229",
                "label": "玉田县",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130281",
                "label": "遵化市",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130283",
                "label": "迁安市",
                "pkeyid": "130200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "130300",
            "label": "秦皇岛市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "130302",
                "label": "海港区",
                "pkeyid": "130300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130303",
                "label": "山海关区",
                "pkeyid": "130300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130304",
                "label": "北戴河区",
                "pkeyid": "130300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130306",
                "label": "抚宁区",
                "pkeyid": "130300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130321",
                "label": "青龙满族自治县",
                "pkeyid": "130300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130322",
                "label": "昌黎县",
                "pkeyid": "130300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130324",
                "label": "卢龙县",
                "pkeyid": "130300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "130400",
            "label": "邯郸市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "130402",
                "label": "邯山区",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130403",
                "label": "丛台区",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130404",
                "label": "复兴区",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130406",
                "label": "峰峰矿区",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130421",
                "label": "邯郸县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130423",
                "label": "临漳县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130424",
                "label": "成安县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130425",
                "label": "大名县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130426",
                "label": "涉县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130427",
                "label": "磁县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130428",
                "label": "肥乡县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130429",
                "label": "永年县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130430",
                "label": "邱县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130431",
                "label": "鸡泽县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130432",
                "label": "广平县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130433",
                "label": "馆陶县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130434",
                "label": "魏县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130435",
                "label": "曲周县",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130481",
                "label": "武安市",
                "pkeyid": "130400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "130500",
            "label": "邢台市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "130502",
                "label": "桥东区",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130503",
                "label": "桥西区",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130521",
                "label": "邢台县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130522",
                "label": "临城县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130523",
                "label": "内丘县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130524",
                "label": "柏乡县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130525",
                "label": "隆尧县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130526",
                "label": "任县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130527",
                "label": "南和县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130528",
                "label": "宁晋县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130529",
                "label": "巨鹿县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130530",
                "label": "新河县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130531",
                "label": "广宗县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130532",
                "label": "平乡县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130533",
                "label": "威县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130534",
                "label": "清河县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130535",
                "label": "临西县",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130581",
                "label": "南宫市",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130582",
                "label": "沙河市",
                "pkeyid": "130500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "130600",
            "label": "保定市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "130602",
                "label": "竞秀区",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130606",
                "label": "莲池区",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130607",
                "label": "满城区",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130608",
                "label": "清苑区",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130609",
                "label": "徐水区",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130623",
                "label": "涞水县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130624",
                "label": "阜平县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130626",
                "label": "定兴县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130627",
                "label": "唐县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130628",
                "label": "高阳县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130629",
                "label": "容城县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130630",
                "label": "涞源县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130631",
                "label": "望都县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130632",
                "label": "安新县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130633",
                "label": "易县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130634",
                "label": "曲阳县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130635",
                "label": "蠡县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130636",
                "label": "顺平县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130637",
                "label": "博野县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130638",
                "label": "雄县",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130681",
                "label": "涿州市",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130683",
                "label": "安国市",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130684",
                "label": "高碑店市",
                "pkeyid": "130600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "130700",
            "label": "张家口市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "130702",
                "label": "桥东区",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130703",
                "label": "桥西区",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130705",
                "label": "宣化区",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130706",
                "label": "下花园区",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130708",
                "label": "万全区",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130709",
                "label": "崇礼区",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130722",
                "label": "张北县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130723",
                "label": "康保县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130724",
                "label": "沽源县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130725",
                "label": "尚义县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130726",
                "label": "蔚县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130727",
                "label": "阳原县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130728",
                "label": "怀安县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130730",
                "label": "怀来县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130731",
                "label": "涿鹿县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130732",
                "label": "赤城县",
                "pkeyid": "130700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "130800",
            "label": "承德市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "130802",
                "label": "双桥区",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130803",
                "label": "双滦区",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130804",
                "label": "鹰手营子矿区",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130821",
                "label": "承德县",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130822",
                "label": "兴隆县",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130823",
                "label": "平泉县",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130824",
                "label": "滦平县",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130825",
                "label": "隆化县",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130826",
                "label": "丰宁满族自治县",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130827",
                "label": "宽城满族自治县",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130828",
                "label": "围场满族蒙古族自治县",
                "pkeyid": "130800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "130900",
            "label": "沧州市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "130902",
                "label": "新华区",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130903",
                "label": "运河区",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130921",
                "label": "沧县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130922",
                "label": "青县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130923",
                "label": "东光县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130924",
                "label": "海兴县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130925",
                "label": "盐山县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130926",
                "label": "肃宁县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130927",
                "label": "南皮县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130928",
                "label": "吴桥县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130929",
                "label": "献县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130930",
                "label": "孟村回族自治县",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130981",
                "label": "泊头市",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130982",
                "label": "任丘市",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130983",
                "label": "黄骅市",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "130984",
                "label": "河间市",
                "pkeyid": "130900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "131000",
            "label": "廊坊市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "131002",
                "label": "安次区",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131003",
                "label": "广阳区",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131022",
                "label": "固安县",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131023",
                "label": "永清县",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131024",
                "label": "香河县",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131025",
                "label": "大城县",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131026",
                "label": "文安县",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131028",
                "label": "大厂回族自治县",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131081",
                "label": "霸州市",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131082",
                "label": "三河市",
                "pkeyid": "131000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "131100",
            "label": "衡水市",
            "pkeyid": "130000",
            "code": "",
            "children": [
              {
                "keyid": "131102",
                "label": "桃城区",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131103",
                "label": "冀州区",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131121",
                "label": "枣强县",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131122",
                "label": "武邑县",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131123",
                "label": "武强县",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131124",
                "label": "饶阳县",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131125",
                "label": "安平县",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131126",
                "label": "故城县",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131127",
                "label": "景县",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131128",
                "label": "阜城县",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "131182",
                "label": "深州市",
                "pkeyid": "131100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "131200",
            "label": "定州市",
            "pkeyid": "130000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "131300",
            "label": "辛集市",
            "pkeyid": "130000",
            "code": "",
            "children": ""
          }
        ]
      },
      {
        "keyid": "140000",
        "label": "山西省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "140100",
            "label": "太原市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "140105",
                "label": "小店区",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140106",
                "label": "迎泽区",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140107",
                "label": "杏花岭区",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140108",
                "label": "尖草坪区",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140109",
                "label": "万柏林区",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140110",
                "label": "晋源区",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140121",
                "label": "清徐县",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140122",
                "label": "阳曲县",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140123",
                "label": "娄烦县",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140181",
                "label": "古交市",
                "pkeyid": "140100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "140200",
            "label": "大同市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "140202",
                "label": "城区",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140203",
                "label": "矿区",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140211",
                "label": "南郊区",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140212",
                "label": "新荣区",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140221",
                "label": "阳高县",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140222",
                "label": "天镇县",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140223",
                "label": "广灵县",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140224",
                "label": "灵丘县",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140225",
                "label": "浑源县",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140226",
                "label": "左云县",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140227",
                "label": "大同县",
                "pkeyid": "140200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "140300",
            "label": "阳泉市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "140302",
                "label": "城区",
                "pkeyid": "140300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140303",
                "label": "矿区",
                "pkeyid": "140300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140311",
                "label": "郊区",
                "pkeyid": "140300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140321",
                "label": "平定县",
                "pkeyid": "140300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140322",
                "label": "盂县",
                "pkeyid": "140300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "140400",
            "label": "长治市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "140402",
                "label": "城区",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140411",
                "label": "郊区",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140421",
                "label": "长治县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140423",
                "label": "襄垣县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140424",
                "label": "屯留县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140425",
                "label": "平顺县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140426",
                "label": "黎城县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140427",
                "label": "壶关县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140428",
                "label": "长子县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140429",
                "label": "武乡县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140430",
                "label": "沁县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140431",
                "label": "沁源县",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140481",
                "label": "潞城市",
                "pkeyid": "140400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "140500",
            "label": "晋城市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "140502",
                "label": "城区",
                "pkeyid": "140500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140521",
                "label": "沁水县",
                "pkeyid": "140500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140522",
                "label": "阳城县",
                "pkeyid": "140500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140524",
                "label": "陵川县",
                "pkeyid": "140500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140525",
                "label": "泽州县",
                "pkeyid": "140500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140581",
                "label": "高平市",
                "pkeyid": "140500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "140600",
            "label": "朔州市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "140602",
                "label": "朔城区",
                "pkeyid": "140600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140603",
                "label": "平鲁区",
                "pkeyid": "140600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140621",
                "label": "山阴县",
                "pkeyid": "140600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140622",
                "label": "应县",
                "pkeyid": "140600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140623",
                "label": "右玉县",
                "pkeyid": "140600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140624",
                "label": "怀仁县",
                "pkeyid": "140600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "140700",
            "label": "晋中市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "140702",
                "label": "榆次区",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140721",
                "label": "榆社县",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140722",
                "label": "左权县",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140723",
                "label": "和顺县",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140724",
                "label": "昔阳县",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140725",
                "label": "寿阳县",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140726",
                "label": "太谷县",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140727",
                "label": "祁县",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140728",
                "label": "平遥县",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140729",
                "label": "灵石县",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140781",
                "label": "介休市",
                "pkeyid": "140700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "140800",
            "label": "运城市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "140802",
                "label": "盐湖区",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140821",
                "label": "临猗县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140822",
                "label": "万荣县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140823",
                "label": "闻喜县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140824",
                "label": "稷山县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140825",
                "label": "新绛县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140826",
                "label": "绛县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140827",
                "label": "垣曲县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140828",
                "label": "夏县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140829",
                "label": "平陆县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140830",
                "label": "芮城县",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140881",
                "label": "永济市",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140882",
                "label": "河津市",
                "pkeyid": "140800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "140900",
            "label": "忻州市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "140902",
                "label": "忻府区",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140921",
                "label": "定襄县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140922",
                "label": "五台县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140923",
                "label": "代县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140924",
                "label": "繁峙县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140925",
                "label": "宁武县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140926",
                "label": "静乐县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140927",
                "label": "神池县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140928",
                "label": "五寨县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140929",
                "label": "岢岚县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140930",
                "label": "河曲县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140931",
                "label": "保德县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140932",
                "label": "偏关县",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "140981",
                "label": "原平市",
                "pkeyid": "140900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "141000",
            "label": "临汾市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "141002",
                "label": "尧都区",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141021",
                "label": "曲沃县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141022",
                "label": "翼城县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141023",
                "label": "襄汾县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141024",
                "label": "洪洞县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141025",
                "label": "古县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141026",
                "label": "安泽县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141027",
                "label": "浮山县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141028",
                "label": "吉县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141029",
                "label": "乡宁县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141030",
                "label": "大宁县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141031",
                "label": "隰县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141032",
                "label": "永和县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141033",
                "label": "蒲县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141034",
                "label": "汾西县",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141081",
                "label": "侯马市",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141082",
                "label": "霍州市",
                "pkeyid": "141000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "141100",
            "label": "吕梁市",
            "pkeyid": "140000",
            "code": "",
            "children": [
              {
                "keyid": "141102",
                "label": "离石区",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141121",
                "label": "文水县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141122",
                "label": "交城县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141123",
                "label": "兴县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141124",
                "label": "临县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141125",
                "label": "柳林县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141126",
                "label": "石楼县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141127",
                "label": "岚县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141128",
                "label": "方山县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141129",
                "label": "中阳县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141130",
                "label": "交口县",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141181",
                "label": "孝义市",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "141182",
                "label": "汾阳市",
                "pkeyid": "141100",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "150000",
        "label": "内蒙古自治区",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "150100",
            "label": "呼和浩特市",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "150102",
                "label": "新城区",
                "pkeyid": "150100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150103",
                "label": "回民区",
                "pkeyid": "150100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150104",
                "label": "玉泉区",
                "pkeyid": "150100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150105",
                "label": "赛罕区",
                "pkeyid": "150100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150121",
                "label": "土默特左旗",
                "pkeyid": "150100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150122",
                "label": "托克托县",
                "pkeyid": "150100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150123",
                "label": "和林格尔县",
                "pkeyid": "150100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150124",
                "label": "清水河县",
                "pkeyid": "150100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150125",
                "label": "武川县",
                "pkeyid": "150100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "150200",
            "label": "包头市",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "150202",
                "label": "东河区",
                "pkeyid": "150200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150203",
                "label": "昆都仑区",
                "pkeyid": "150200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150204",
                "label": "青山区",
                "pkeyid": "150200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150205",
                "label": "石拐区",
                "pkeyid": "150200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150206",
                "label": "白云鄂博矿区",
                "pkeyid": "150200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150207",
                "label": "九原区",
                "pkeyid": "150200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150221",
                "label": "土默特右旗",
                "pkeyid": "150200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150222",
                "label": "固阳县",
                "pkeyid": "150200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150223",
                "label": "达尔罕茂明安联合旗",
                "pkeyid": "150200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "150300",
            "label": "乌海市",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "150302",
                "label": "海勃湾区",
                "pkeyid": "150300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150303",
                "label": "海南区",
                "pkeyid": "150300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150304",
                "label": "乌达区",
                "pkeyid": "150300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "150400",
            "label": "赤峰市",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "150402",
                "label": "红山区",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150403",
                "label": "元宝山区",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150404",
                "label": "松山区",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150421",
                "label": "阿鲁科尔沁旗",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150422",
                "label": "巴林左旗",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150423",
                "label": "巴林右旗",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150424",
                "label": "林西县",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150425",
                "label": "克什克腾旗",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150426",
                "label": "翁牛特旗",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150428",
                "label": "喀喇沁旗",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150429",
                "label": "宁城县",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150430",
                "label": "敖汉旗",
                "pkeyid": "150400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "150500",
            "label": "通辽市",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "150502",
                "label": "科尔沁区",
                "pkeyid": "150500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150521",
                "label": "科尔沁左翼中旗",
                "pkeyid": "150500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150522",
                "label": "科尔沁左翼后旗",
                "pkeyid": "150500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150523",
                "label": "开鲁县",
                "pkeyid": "150500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150524",
                "label": "库伦旗",
                "pkeyid": "150500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150525",
                "label": "奈曼旗",
                "pkeyid": "150500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150526",
                "label": "扎鲁特旗",
                "pkeyid": "150500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150581",
                "label": "霍林郭勒市",
                "pkeyid": "150500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "150600",
            "label": "鄂尔多斯市",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "150602",
                "label": "东胜区",
                "pkeyid": "150600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150603",
                "label": "康巴什区",
                "pkeyid": "150600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150621",
                "label": "达拉特旗",
                "pkeyid": "150600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150622",
                "label": "准格尔旗",
                "pkeyid": "150600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150623",
                "label": "鄂托克前旗",
                "pkeyid": "150600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150624",
                "label": "鄂托克旗",
                "pkeyid": "150600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150625",
                "label": "杭锦旗",
                "pkeyid": "150600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150626",
                "label": "乌审旗",
                "pkeyid": "150600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150627",
                "label": "伊金霍洛旗",
                "pkeyid": "150600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "150700",
            "label": "呼伦贝尔市",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "150702",
                "label": "海拉尔区",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150703",
                "label": "扎赉诺尔区",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150721",
                "label": "阿荣旗",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150722",
                "label": "莫力达瓦达斡尔族自治旗",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150723",
                "label": "鄂伦春自治旗",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150724",
                "label": "鄂温克族自治旗",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150725",
                "label": "陈巴尔虎旗",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150726",
                "label": "新巴尔虎左旗",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150727",
                "label": "新巴尔虎右旗",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150781",
                "label": "满洲里市",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150782",
                "label": "牙克石市",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150783",
                "label": "扎兰屯市",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150784",
                "label": "额尔古纳市",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150785",
                "label": "根河市",
                "pkeyid": "150700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "150800",
            "label": "巴彦淖尔市",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "150802",
                "label": "临河区",
                "pkeyid": "150800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150821",
                "label": "五原县",
                "pkeyid": "150800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150822",
                "label": "磴口县",
                "pkeyid": "150800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150823",
                "label": "乌拉特前旗",
                "pkeyid": "150800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150824",
                "label": "乌拉特中旗",
                "pkeyid": "150800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150825",
                "label": "乌拉特后旗",
                "pkeyid": "150800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150826",
                "label": "杭锦后旗",
                "pkeyid": "150800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "150900",
            "label": "乌兰察布市",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "150902",
                "label": "集宁区",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150921",
                "label": "卓资县",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150922",
                "label": "化德县",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150923",
                "label": "商都县",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150924",
                "label": "兴和县",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150925",
                "label": "凉城县",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150926",
                "label": "察哈尔右翼前旗",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150927",
                "label": "察哈尔右翼中旗",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150928",
                "label": "察哈尔右翼后旗",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150929",
                "label": "四子王旗",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "150981",
                "label": "丰镇市",
                "pkeyid": "150900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "152200",
            "label": "兴安盟",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "152201",
                "label": "乌兰浩特市",
                "pkeyid": "152200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152202",
                "label": "阿尔山市",
                "pkeyid": "152200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152221",
                "label": "科尔沁右翼前旗",
                "pkeyid": "152200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152222",
                "label": "科尔沁右翼中旗",
                "pkeyid": "152200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152223",
                "label": "扎赉特旗",
                "pkeyid": "152200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152224",
                "label": "突泉县",
                "pkeyid": "152200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "152500",
            "label": "锡林郭勒盟",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "152501",
                "label": "二连浩特市",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152502",
                "label": "锡林浩特市",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152522",
                "label": "阿巴嘎旗",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152523",
                "label": "苏尼特左旗",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152524",
                "label": "苏尼特右旗",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152525",
                "label": "东乌珠穆沁旗",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152526",
                "label": "西乌珠穆沁旗",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152527",
                "label": "太仆寺旗",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152528",
                "label": "镶黄旗",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152529",
                "label": "正镶白旗",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152530",
                "label": "正蓝旗",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152531",
                "label": "多伦县",
                "pkeyid": "152500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "152900",
            "label": "阿拉善盟",
            "pkeyid": "150000",
            "code": "",
            "children": [
              {
                "keyid": "152921",
                "label": "阿拉善左旗",
                "pkeyid": "152900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152922",
                "label": "阿拉善右旗",
                "pkeyid": "152900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "152923",
                "label": "额济纳旗",
                "pkeyid": "152900",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "210000",
        "label": "辽宁省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "210100",
            "label": "沈阳市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "210102",
                "label": "和平区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210103",
                "label": "沈河区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210104",
                "label": "大东区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210105",
                "label": "皇姑区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210106",
                "label": "铁西区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210111",
                "label": "苏家屯区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210112",
                "label": "浑南区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210113",
                "label": "沈北新区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210114",
                "label": "于洪区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210115",
                "label": "辽中区",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210123",
                "label": "康平县",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210124",
                "label": "法库县",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210181",
                "label": "新民市",
                "pkeyid": "210100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "210200",
            "label": "大连市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "210202",
                "label": "中山区",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210203",
                "label": "西岗区",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210204",
                "label": "沙河口区",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210211",
                "label": "甘井子区",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210212",
                "label": "旅顺口区",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210213",
                "label": "金州区",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210214",
                "label": "普兰店区",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210224",
                "label": "长海县",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210281",
                "label": "瓦房店市",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210283",
                "label": "庄河市",
                "pkeyid": "210200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "210300",
            "label": "鞍山市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "210302",
                "label": "铁东区",
                "pkeyid": "210300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210303",
                "label": "铁西区",
                "pkeyid": "210300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210304",
                "label": "立山区",
                "pkeyid": "210300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210311",
                "label": "千山区",
                "pkeyid": "210300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210321",
                "label": "台安县",
                "pkeyid": "210300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210323",
                "label": "岫岩满族自治县",
                "pkeyid": "210300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210381",
                "label": "海城市",
                "pkeyid": "210300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "210400",
            "label": "抚顺市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "210402",
                "label": "新抚区",
                "pkeyid": "210400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210403",
                "label": "东洲区",
                "pkeyid": "210400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210404",
                "label": "望花区",
                "pkeyid": "210400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210411",
                "label": "顺城区",
                "pkeyid": "210400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210421",
                "label": "抚顺县",
                "pkeyid": "210400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210422",
                "label": "新宾满族自治县",
                "pkeyid": "210400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210423",
                "label": "清原满族自治县",
                "pkeyid": "210400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "210500",
            "label": "本溪市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "210502",
                "label": "平山区",
                "pkeyid": "210500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210503",
                "label": "溪湖区",
                "pkeyid": "210500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210504",
                "label": "明山区",
                "pkeyid": "210500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210505",
                "label": "南芬区",
                "pkeyid": "210500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210521",
                "label": "本溪满族自治县",
                "pkeyid": "210500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210522",
                "label": "桓仁满族自治县",
                "pkeyid": "210500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "210600",
            "label": "丹东市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "210602",
                "label": "元宝区",
                "pkeyid": "210600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210603",
                "label": "振兴区",
                "pkeyid": "210600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210604",
                "label": "振安区",
                "pkeyid": "210600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210624",
                "label": "宽甸满族自治县",
                "pkeyid": "210600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210681",
                "label": "东港市",
                "pkeyid": "210600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210682",
                "label": "凤城市",
                "pkeyid": "210600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "210700",
            "label": "锦州市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "210702",
                "label": "古塔区",
                "pkeyid": "210700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210703",
                "label": "凌河区",
                "pkeyid": "210700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210711",
                "label": "太和区",
                "pkeyid": "210700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210726",
                "label": "黑山县",
                "pkeyid": "210700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210727",
                "label": "义县",
                "pkeyid": "210700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210781",
                "label": "凌海市",
                "pkeyid": "210700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210782",
                "label": "北镇市",
                "pkeyid": "210700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "210800",
            "label": "营口市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "210802",
                "label": "站前区",
                "pkeyid": "210800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210803",
                "label": "西市区",
                "pkeyid": "210800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210804",
                "label": "鲅鱼圈区",
                "pkeyid": "210800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210811",
                "label": "老边区",
                "pkeyid": "210800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210881",
                "label": "盖州市",
                "pkeyid": "210800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210882",
                "label": "大石桥市",
                "pkeyid": "210800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "210900",
            "label": "阜新市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "210902",
                "label": "海州区",
                "pkeyid": "210900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210903",
                "label": "新邱区",
                "pkeyid": "210900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210904",
                "label": "太平区",
                "pkeyid": "210900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210905",
                "label": "清河门区",
                "pkeyid": "210900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210911",
                "label": "细河区",
                "pkeyid": "210900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210921",
                "label": "阜新蒙古族自治县",
                "pkeyid": "210900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "210922",
                "label": "彰武县",
                "pkeyid": "210900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "211000",
            "label": "辽阳市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "211002",
                "label": "白塔区",
                "pkeyid": "211000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211003",
                "label": "文圣区",
                "pkeyid": "211000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211004",
                "label": "宏伟区",
                "pkeyid": "211000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211005",
                "label": "弓长岭区",
                "pkeyid": "211000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211011",
                "label": "太子河区",
                "pkeyid": "211000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211021",
                "label": "辽阳县",
                "pkeyid": "211000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211081",
                "label": "灯塔市",
                "pkeyid": "211000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "211100",
            "label": "盘锦市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "211102",
                "label": "双台子区",
                "pkeyid": "211100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211103",
                "label": "兴隆台区",
                "pkeyid": "211100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211104",
                "label": "大洼区",
                "pkeyid": "211100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211122",
                "label": "盘山县",
                "pkeyid": "211100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "211200",
            "label": "铁岭市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "211202",
                "label": "银州区",
                "pkeyid": "211200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211204",
                "label": "清河区",
                "pkeyid": "211200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211221",
                "label": "铁岭县",
                "pkeyid": "211200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211223",
                "label": "西丰县",
                "pkeyid": "211200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211224",
                "label": "昌图县",
                "pkeyid": "211200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211281",
                "label": "调兵山市",
                "pkeyid": "211200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211282",
                "label": "开原市",
                "pkeyid": "211200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "211300",
            "label": "朝阳市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "211302",
                "label": "双塔区",
                "pkeyid": "211300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211303",
                "label": "龙城区",
                "pkeyid": "211300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211321",
                "label": "朝阳县",
                "pkeyid": "211300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211322",
                "label": "建平县",
                "pkeyid": "211300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211324",
                "label": "喀喇沁左翼蒙古族自治县",
                "pkeyid": "211300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211381",
                "label": "北票市",
                "pkeyid": "211300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211382",
                "label": "凌源市",
                "pkeyid": "211300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "211400",
            "label": "葫芦岛市",
            "pkeyid": "210000",
            "code": "",
            "children": [
              {
                "keyid": "211402",
                "label": "连山区",
                "pkeyid": "211400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211403",
                "label": "龙港区",
                "pkeyid": "211400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211404",
                "label": "南票区",
                "pkeyid": "211400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211421",
                "label": "绥中县",
                "pkeyid": "211400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211422",
                "label": "建昌县",
                "pkeyid": "211400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "211481",
                "label": "兴城市",
                "pkeyid": "211400",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "220000",
        "label": "吉林省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "220100",
            "label": "长春市",
            "pkeyid": "220000",
            "code": "",
            "children": [
              {
                "keyid": "220102",
                "label": "南关区",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220103",
                "label": "宽城区",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220104",
                "label": "朝阳区",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220105",
                "label": "二道区",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220106",
                "label": "绿园区",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220112",
                "label": "双阳区",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220113",
                "label": "九台区",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220122",
                "label": "农安县",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220182",
                "label": "榆树市",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220183",
                "label": "德惠市",
                "pkeyid": "220100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "220200",
            "label": "吉林市",
            "pkeyid": "220000",
            "code": "",
            "children": [
              {
                "keyid": "220202",
                "label": "昌邑区",
                "pkeyid": "220200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220203",
                "label": "龙潭区",
                "pkeyid": "220200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220204",
                "label": "船营区",
                "pkeyid": "220200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220211",
                "label": "丰满区",
                "pkeyid": "220200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220221",
                "label": "永吉县",
                "pkeyid": "220200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220281",
                "label": "蛟河市",
                "pkeyid": "220200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220282",
                "label": "桦甸市",
                "pkeyid": "220200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220283",
                "label": "舒兰市",
                "pkeyid": "220200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220284",
                "label": "磐石市",
                "pkeyid": "220200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "220300",
            "label": "四平市",
            "pkeyid": "220000",
            "code": "",
            "children": [
              {
                "keyid": "220302",
                "label": "铁西区",
                "pkeyid": "220300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220303",
                "label": "铁东区",
                "pkeyid": "220300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220322",
                "label": "梨树县",
                "pkeyid": "220300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220323",
                "label": "伊通满族自治县",
                "pkeyid": "220300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220381",
                "label": "公主岭市",
                "pkeyid": "220300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220382",
                "label": "双辽市",
                "pkeyid": "220300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "220400",
            "label": "辽源市",
            "pkeyid": "220000",
            "code": "",
            "children": [
              {
                "keyid": "220402",
                "label": "龙山区",
                "pkeyid": "220400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220403",
                "label": "西安区",
                "pkeyid": "220400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220421",
                "label": "东丰县",
                "pkeyid": "220400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220422",
                "label": "东辽县",
                "pkeyid": "220400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "220500",
            "label": "通化市",
            "pkeyid": "220000",
            "code": "",
            "children": [
              {
                "keyid": "220502",
                "label": "东昌区",
                "pkeyid": "220500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220503",
                "label": "二道江区",
                "pkeyid": "220500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220521",
                "label": "通化县",
                "pkeyid": "220500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220523",
                "label": "辉南县",
                "pkeyid": "220500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220524",
                "label": "柳河县",
                "pkeyid": "220500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220581",
                "label": "梅河口市",
                "pkeyid": "220500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220582",
                "label": "集安市",
                "pkeyid": "220500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "220600",
            "label": "白山市",
            "pkeyid": "220000",
            "code": "",
            "children": [
              {
                "keyid": "220602",
                "label": "浑江区",
                "pkeyid": "220600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220605",
                "label": "江源区",
                "pkeyid": "220600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220621",
                "label": "抚松县",
                "pkeyid": "220600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220622",
                "label": "靖宇县",
                "pkeyid": "220600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220623",
                "label": "长白朝鲜族自治县",
                "pkeyid": "220600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220681",
                "label": "临江市",
                "pkeyid": "220600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "220700",
            "label": "松原市",
            "pkeyid": "220000",
            "code": "",
            "children": [
              {
                "keyid": "220702",
                "label": "宁江区",
                "pkeyid": "220700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220721",
                "label": "前郭尔罗斯蒙古族自治县",
                "pkeyid": "220700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220722",
                "label": "长岭县",
                "pkeyid": "220700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220723",
                "label": "乾安县",
                "pkeyid": "220700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220781",
                "label": "扶余市",
                "pkeyid": "220700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "220800",
            "label": "白城市",
            "pkeyid": "220000",
            "code": "",
            "children": [
              {
                "keyid": "220802",
                "label": "洮北区",
                "pkeyid": "220800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220821",
                "label": "镇赉县",
                "pkeyid": "220800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220822",
                "label": "通榆县",
                "pkeyid": "220800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220881",
                "label": "洮南市",
                "pkeyid": "220800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "220882",
                "label": "大安市",
                "pkeyid": "220800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "222400",
            "label": "延边朝鲜族自治州",
            "pkeyid": "220000",
            "code": "",
            "children": [
              {
                "keyid": "222401",
                "label": "延吉市",
                "pkeyid": "222400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "222402",
                "label": "图们市",
                "pkeyid": "222400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "222403",
                "label": "敦化市",
                "pkeyid": "222400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "222404",
                "label": "珲春市",
                "pkeyid": "222400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "222405",
                "label": "龙井市",
                "pkeyid": "222400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "222406",
                "label": "和龙市",
                "pkeyid": "222400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "222424",
                "label": "汪清县",
                "pkeyid": "222400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "222426",
                "label": "安图县",
                "pkeyid": "222400",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "230000",
        "label": "黑龙江省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "230100",
            "label": "哈尔滨市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "230102",
                "label": "道里区",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230103",
                "label": "南岗区",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230104",
                "label": "道外区",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230108",
                "label": "平房区",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230109",
                "label": "松北区",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230110",
                "label": "香坊区",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230111",
                "label": "呼兰区",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230112",
                "label": "阿城区",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230113",
                "label": "双城区",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230123",
                "label": "依兰县",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230124",
                "label": "方正县",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230125",
                "label": "宾县",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230126",
                "label": "巴彦县",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230127",
                "label": "木兰县",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230128",
                "label": "通河县",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230129",
                "label": "延寿县",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230183",
                "label": "尚志市",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230184",
                "label": "五常市",
                "pkeyid": "230100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "230200",
            "label": "齐齐哈尔市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "230202",
                "label": "龙沙区",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230203",
                "label": "建华区",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230204",
                "label": "铁锋区",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230205",
                "label": "昂昂溪区",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230206",
                "label": "富拉尔基区",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230207",
                "label": "碾子山区",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230208",
                "label": "梅里斯达斡尔族区",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230221",
                "label": "龙江县",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230223",
                "label": "依安县",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230224",
                "label": "泰来县",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230225",
                "label": "甘南县",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230227",
                "label": "富裕县",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230229",
                "label": "克山县",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230230",
                "label": "克东县",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230231",
                "label": "拜泉县",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230281",
                "label": "讷河市",
                "pkeyid": "230200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "230300",
            "label": "鸡西市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "230302",
                "label": "鸡冠区",
                "pkeyid": "230300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230303",
                "label": "恒山区",
                "pkeyid": "230300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230304",
                "label": "滴道区",
                "pkeyid": "230300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230305",
                "label": "梨树区",
                "pkeyid": "230300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230306",
                "label": "城子河区",
                "pkeyid": "230300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230307",
                "label": "麻山区",
                "pkeyid": "230300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230321",
                "label": "鸡东县",
                "pkeyid": "230300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230381",
                "label": "虎林市",
                "pkeyid": "230300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230382",
                "label": "密山市",
                "pkeyid": "230300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "230400",
            "label": "鹤岗市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "230402",
                "label": "向阳区",
                "pkeyid": "230400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230403",
                "label": "工农区",
                "pkeyid": "230400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230404",
                "label": "南山区",
                "pkeyid": "230400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230405",
                "label": "兴安区",
                "pkeyid": "230400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230406",
                "label": "东山区",
                "pkeyid": "230400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230407",
                "label": "兴山区",
                "pkeyid": "230400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230421",
                "label": "萝北县",
                "pkeyid": "230400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230422",
                "label": "绥滨县",
                "pkeyid": "230400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "230500",
            "label": "双鸭山市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "230502",
                "label": "尖山区",
                "pkeyid": "230500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230503",
                "label": "岭东区",
                "pkeyid": "230500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230505",
                "label": "四方台区",
                "pkeyid": "230500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230506",
                "label": "宝山区",
                "pkeyid": "230500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230521",
                "label": "集贤县",
                "pkeyid": "230500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230522",
                "label": "友谊县",
                "pkeyid": "230500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230523",
                "label": "宝清县",
                "pkeyid": "230500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230524",
                "label": "饶河县",
                "pkeyid": "230500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "230600",
            "label": "大庆市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "230602",
                "label": "萨尔图区",
                "pkeyid": "230600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230603",
                "label": "龙凤区",
                "pkeyid": "230600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230604",
                "label": "让胡路区",
                "pkeyid": "230600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230605",
                "label": "红岗区",
                "pkeyid": "230600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230606",
                "label": "大同区",
                "pkeyid": "230600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230621",
                "label": "肇州县",
                "pkeyid": "230600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230622",
                "label": "肇源县",
                "pkeyid": "230600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230623",
                "label": "林甸县",
                "pkeyid": "230600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230624",
                "label": "杜尔伯特蒙古族自治县",
                "pkeyid": "230600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "230700",
            "label": "伊春市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "230702",
                "label": "伊春区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230703",
                "label": "南岔区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230704",
                "label": "友好区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230705",
                "label": "西林区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230706",
                "label": "翠峦区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230707",
                "label": "新青区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230708",
                "label": "美溪区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230709",
                "label": "金山屯区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230710",
                "label": "五营区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230711",
                "label": "乌马河区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230712",
                "label": "汤旺河区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230713",
                "label": "带岭区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230714",
                "label": "乌伊岭区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230715",
                "label": "红星区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230716",
                "label": "上甘岭区",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230722",
                "label": "嘉荫县",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230781",
                "label": "铁力市",
                "pkeyid": "230700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "230800",
            "label": "佳木斯市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "230803",
                "label": "向阳区",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230804",
                "label": "前进区",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230805",
                "label": "东风区",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230811",
                "label": "郊区",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230822",
                "label": "桦南县",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230826",
                "label": "桦川县",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230828",
                "label": "汤原县",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230881",
                "label": "同江市",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230882",
                "label": "富锦市",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230883",
                "label": "抚远市",
                "pkeyid": "230800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "230900",
            "label": "七台河市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "230902",
                "label": "新兴区",
                "pkeyid": "230900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230903",
                "label": "桃山区",
                "pkeyid": "230900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230904",
                "label": "茄子河区",
                "pkeyid": "230900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "230921",
                "label": "勃利县",
                "pkeyid": "230900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "231000",
            "label": "牡丹江市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "231002",
                "label": "东安区",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231003",
                "label": "阳明区",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231004",
                "label": "爱民区",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231005",
                "label": "西安区",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231025",
                "label": "林口县",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231081",
                "label": "绥芬河市",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231083",
                "label": "海林市",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231084",
                "label": "宁安市",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231085",
                "label": "穆棱市",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231086",
                "label": "东宁市",
                "pkeyid": "231000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "231100",
            "label": "黑河市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "231102",
                "label": "爱辉区",
                "pkeyid": "231100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231121",
                "label": "嫩江县",
                "pkeyid": "231100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231123",
                "label": "逊克县",
                "pkeyid": "231100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231124",
                "label": "孙吴县",
                "pkeyid": "231100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231181",
                "label": "北安市",
                "pkeyid": "231100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231182",
                "label": "五大连池市",
                "pkeyid": "231100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "231200",
            "label": "绥化市",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "231202",
                "label": "北林区",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231221",
                "label": "望奎县",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231222",
                "label": "兰西县",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231223",
                "label": "青冈县",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231224",
                "label": "庆安县",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231225",
                "label": "明水县",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231226",
                "label": "绥棱县",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231281",
                "label": "安达市",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231282",
                "label": "肇东市",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "231283",
                "label": "海伦市",
                "pkeyid": "231200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "232700",
            "label": "大兴安岭地区",
            "pkeyid": "230000",
            "code": "",
            "children": [
              {
                "keyid": "232721",
                "label": "呼玛县",
                "pkeyid": "232700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "232722",
                "label": "塔河县",
                "pkeyid": "232700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "232723",
                "label": "漠河县",
                "pkeyid": "232700",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "310000",
        "label": "上海市",
        "pkeyid": "0000",
        "code": "",
        "children": ""
      },
      {
        "keyid": "320000",
        "label": "江苏省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "320100",
            "label": "南京市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "320102",
                "label": "玄武区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320104",
                "label": "秦淮区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320105",
                "label": "建邺区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320106",
                "label": "鼓楼区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320111",
                "label": "浦口区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320113",
                "label": "栖霞区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320114",
                "label": "雨花台区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320115",
                "label": "江宁区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320116",
                "label": "六合区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320117",
                "label": "溧水区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320118",
                "label": "高淳区",
                "pkeyid": "320100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "320200",
            "label": "无锡市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "320205",
                "label": "锡山区",
                "pkeyid": "320200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320206",
                "label": "惠山区",
                "pkeyid": "320200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320211",
                "label": "滨湖区",
                "pkeyid": "320200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320213",
                "label": "梁溪区",
                "pkeyid": "320200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320214",
                "label": "新吴区",
                "pkeyid": "320200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320281",
                "label": "江阴市",
                "pkeyid": "320200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320282",
                "label": "宜兴市",
                "pkeyid": "320200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "320300",
            "label": "徐州市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "320302",
                "label": "鼓楼区",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320303",
                "label": "云龙区",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320305",
                "label": "贾汪区",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320311",
                "label": "泉山区",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320312",
                "label": "铜山区",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320321",
                "label": "丰县",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320322",
                "label": "沛县",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320324",
                "label": "睢宁县",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320381",
                "label": "新沂市",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320382",
                "label": "邳州市",
                "pkeyid": "320300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "320400",
            "label": "常州市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "320402",
                "label": "天宁区",
                "pkeyid": "320400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320404",
                "label": "钟楼区",
                "pkeyid": "320400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320411",
                "label": "新北区",
                "pkeyid": "320400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320412",
                "label": "武进区",
                "pkeyid": "320400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320413",
                "label": "金坛区",
                "pkeyid": "320400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320481",
                "label": "溧阳市",
                "pkeyid": "320400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "320500",
            "label": "苏州市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "320505",
                "label": "虎丘区",
                "pkeyid": "320500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320506",
                "label": "吴中区",
                "pkeyid": "320500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320507",
                "label": "相城区",
                "pkeyid": "320500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320508",
                "label": "姑苏区",
                "pkeyid": "320500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320509",
                "label": "吴江区",
                "pkeyid": "320500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320581",
                "label": "常熟市",
                "pkeyid": "320500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320582",
                "label": "张家港市",
                "pkeyid": "320500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320583",
                "label": "昆山市",
                "pkeyid": "320500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320585",
                "label": "太仓市",
                "pkeyid": "320500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "320600",
            "label": "南通市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "320602",
                "label": "崇川区",
                "pkeyid": "320600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320611",
                "label": "港闸区",
                "pkeyid": "320600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320612",
                "label": "通州区",
                "pkeyid": "320600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320621",
                "label": "海安县",
                "pkeyid": "320600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320623",
                "label": "如东县",
                "pkeyid": "320600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320681",
                "label": "启东市",
                "pkeyid": "320600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320682",
                "label": "如皋市",
                "pkeyid": "320600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320684",
                "label": "海门市",
                "pkeyid": "320600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "320700",
            "label": "连云港市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "320703",
                "label": "连云区",
                "pkeyid": "320700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320706",
                "label": "海州区",
                "pkeyid": "320700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320707",
                "label": "赣榆区",
                "pkeyid": "320700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320722",
                "label": "东海县",
                "pkeyid": "320700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320723",
                "label": "灌云县",
                "pkeyid": "320700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320724",
                "label": "灌南县",
                "pkeyid": "320700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "320800",
            "label": "淮安市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "320803",
                "label": "淮安区",
                "pkeyid": "320800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320804",
                "label": "淮阴区",
                "pkeyid": "320800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320812",
                "label": "清江浦区",
                "pkeyid": "320800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320813",
                "label": "洪泽区",
                "pkeyid": "320800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320826",
                "label": "涟水县",
                "pkeyid": "320800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320830",
                "label": "盱眙县",
                "pkeyid": "320800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320831",
                "label": "金湖县",
                "pkeyid": "320800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "320900",
            "label": "盐城市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "320902",
                "label": "亭湖区",
                "pkeyid": "320900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320903",
                "label": "盐都区",
                "pkeyid": "320900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320904",
                "label": "大丰区",
                "pkeyid": "320900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320921",
                "label": "响水县",
                "pkeyid": "320900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320922",
                "label": "滨海县",
                "pkeyid": "320900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320923",
                "label": "阜宁县",
                "pkeyid": "320900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320924",
                "label": "射阳县",
                "pkeyid": "320900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320925",
                "label": "建湖县",
                "pkeyid": "320900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "320981",
                "label": "东台市",
                "pkeyid": "320900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "321000",
            "label": "扬州市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "321002",
                "label": "广陵区",
                "pkeyid": "321000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321003",
                "label": "邗江区",
                "pkeyid": "321000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321012",
                "label": "江都区",
                "pkeyid": "321000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321023",
                "label": "宝应县",
                "pkeyid": "321000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321081",
                "label": "仪征市",
                "pkeyid": "321000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321084",
                "label": "高邮市",
                "pkeyid": "321000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "321100",
            "label": "镇江市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "321102",
                "label": "京口区",
                "pkeyid": "321100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321111",
                "label": "润州区",
                "pkeyid": "321100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321112",
                "label": "丹徒区",
                "pkeyid": "321100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321181",
                "label": "丹阳市",
                "pkeyid": "321100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321182",
                "label": "扬中市",
                "pkeyid": "321100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321183",
                "label": "句容市",
                "pkeyid": "321100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "321200",
            "label": "泰州市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "321202",
                "label": "海陵区",
                "pkeyid": "321200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321203",
                "label": "高港区",
                "pkeyid": "321200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321204",
                "label": "姜堰区",
                "pkeyid": "321200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321281",
                "label": "兴化市",
                "pkeyid": "321200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321282",
                "label": "靖江市",
                "pkeyid": "321200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321283",
                "label": "泰兴市",
                "pkeyid": "321200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "321300",
            "label": "宿迁市",
            "pkeyid": "320000",
            "code": "",
            "children": [
              {
                "keyid": "321302",
                "label": "宿城区",
                "pkeyid": "321300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321311",
                "label": "宿豫区",
                "pkeyid": "321300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321322",
                "label": "沭阳县",
                "pkeyid": "321300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321323",
                "label": "泗阳县",
                "pkeyid": "321300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "321324",
                "label": "泗洪县",
                "pkeyid": "321300",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "330000",
        "label": "浙江省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "330100",
            "label": "杭州市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "330102",
                "label": "上城区",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330103",
                "label": "下城区",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330104",
                "label": "江干区",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330105",
                "label": "拱墅区",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330106",
                "label": "西湖区",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330108",
                "label": "滨江区",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330109",
                "label": "萧山区",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330110",
                "label": "余杭区",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330111",
                "label": "富阳区",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330122",
                "label": "桐庐县",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330127",
                "label": "淳安县",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330182",
                "label": "建德市",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330185",
                "label": "临安市",
                "pkeyid": "330100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "330200",
            "label": "宁波市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "330203",
                "label": "海曙区",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330204",
                "label": "江东区",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330205",
                "label": "江北区",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330206",
                "label": "北仑区",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330211",
                "label": "镇海区",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330212",
                "label": "鄞州区",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330225",
                "label": "象山县",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330226",
                "label": "宁海县",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330281",
                "label": "余姚市",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330282",
                "label": "慈溪市",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330283",
                "label": "奉化市",
                "pkeyid": "330200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "330300",
            "label": "温州市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "330302",
                "label": "鹿城区",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330303",
                "label": "龙湾区",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330304",
                "label": "瓯海区",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330305",
                "label": "洞头区",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330324",
                "label": "永嘉县",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330326",
                "label": "平阳县",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330327",
                "label": "苍南县",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330328",
                "label": "文成县",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330329",
                "label": "泰顺县",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330381",
                "label": "瑞安市",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330382",
                "label": "乐清市",
                "pkeyid": "330300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "330400",
            "label": "嘉兴市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "330402",
                "label": "南湖区",
                "pkeyid": "330400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330411",
                "label": "秀洲区",
                "pkeyid": "330400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330421",
                "label": "嘉善县",
                "pkeyid": "330400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330424",
                "label": "海盐县",
                "pkeyid": "330400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330481",
                "label": "海宁市",
                "pkeyid": "330400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330482",
                "label": "平湖市",
                "pkeyid": "330400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330483",
                "label": "桐乡市",
                "pkeyid": "330400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "330500",
            "label": "湖州市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "330502",
                "label": "吴兴区",
                "pkeyid": "330500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330503",
                "label": "南浔区",
                "pkeyid": "330500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330521",
                "label": "德清县",
                "pkeyid": "330500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330522",
                "label": "长兴县",
                "pkeyid": "330500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330523",
                "label": "安吉县",
                "pkeyid": "330500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "330600",
            "label": "绍兴市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "330602",
                "label": "越城区",
                "pkeyid": "330600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330603",
                "label": "柯桥区",
                "pkeyid": "330600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330604",
                "label": "上虞区",
                "pkeyid": "330600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330624",
                "label": "新昌县",
                "pkeyid": "330600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330681",
                "label": "诸暨市",
                "pkeyid": "330600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330683",
                "label": "嵊州市",
                "pkeyid": "330600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "330700",
            "label": "金华市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "330702",
                "label": "婺城区",
                "pkeyid": "330700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330703",
                "label": "金东区",
                "pkeyid": "330700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330723",
                "label": "武义县",
                "pkeyid": "330700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330726",
                "label": "浦江县",
                "pkeyid": "330700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330727",
                "label": "磐安县",
                "pkeyid": "330700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330781",
                "label": "兰溪市",
                "pkeyid": "330700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330782",
                "label": "义乌市",
                "pkeyid": "330700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330783",
                "label": "东阳市",
                "pkeyid": "330700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330784",
                "label": "永康市",
                "pkeyid": "330700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "330800",
            "label": "衢州市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "330802",
                "label": "柯城区",
                "pkeyid": "330800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330803",
                "label": "衢江区",
                "pkeyid": "330800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330822",
                "label": "常山县",
                "pkeyid": "330800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330824",
                "label": "开化县",
                "pkeyid": "330800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330825",
                "label": "龙游县",
                "pkeyid": "330800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330881",
                "label": "江山市",
                "pkeyid": "330800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "330900",
            "label": "舟山市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "330902",
                "label": "定海区",
                "pkeyid": "330900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330903",
                "label": "普陀区",
                "pkeyid": "330900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330921",
                "label": "岱山县",
                "pkeyid": "330900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "330922",
                "label": "嵊泗县",
                "pkeyid": "330900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "331000",
            "label": "台州市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "331002",
                "label": "椒江区",
                "pkeyid": "331000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331003",
                "label": "黄岩区",
                "pkeyid": "331000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331004",
                "label": "路桥区",
                "pkeyid": "331000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331021",
                "label": "玉环县",
                "pkeyid": "331000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331022",
                "label": "三门县",
                "pkeyid": "331000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331023",
                "label": "天台县",
                "pkeyid": "331000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331024",
                "label": "仙居县",
                "pkeyid": "331000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331081",
                "label": "温岭市",
                "pkeyid": "331000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331082",
                "label": "临海市",
                "pkeyid": "331000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "331100",
            "label": "丽水市",
            "pkeyid": "330000",
            "code": "",
            "children": [
              {
                "keyid": "331102",
                "label": "莲都区",
                "pkeyid": "331100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331121",
                "label": "青田县",
                "pkeyid": "331100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331122",
                "label": "缙云县",
                "pkeyid": "331100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331123",
                "label": "遂昌县",
                "pkeyid": "331100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331124",
                "label": "松阳县",
                "pkeyid": "331100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331125",
                "label": "云和县",
                "pkeyid": "331100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331126",
                "label": "庆元县",
                "pkeyid": "331100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331127",
                "label": "景宁畲族自治县",
                "pkeyid": "331100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "331181",
                "label": "龙泉市",
                "pkeyid": "331100",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "340000",
        "label": "安徽省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "340100",
            "label": "合肥市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "340102",
                "label": "瑶海区",
                "pkeyid": "340100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340103",
                "label": "庐阳区",
                "pkeyid": "340100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340104",
                "label": "蜀山区",
                "pkeyid": "340100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340111",
                "label": "包河区",
                "pkeyid": "340100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340121",
                "label": "长丰县",
                "pkeyid": "340100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340122",
                "label": "肥东县",
                "pkeyid": "340100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340123",
                "label": "肥西县",
                "pkeyid": "340100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340124",
                "label": "庐江县",
                "pkeyid": "340100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340181",
                "label": "巢湖市",
                "pkeyid": "340100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "340200",
            "label": "芜湖市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "340202",
                "label": "镜湖区",
                "pkeyid": "340200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340203",
                "label": "弋江区",
                "pkeyid": "340200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340207",
                "label": "鸠江区",
                "pkeyid": "340200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340208",
                "label": "三山区",
                "pkeyid": "340200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340221",
                "label": "芜湖县",
                "pkeyid": "340200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340222",
                "label": "繁昌县",
                "pkeyid": "340200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340223",
                "label": "南陵县",
                "pkeyid": "340200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340225",
                "label": "无为县",
                "pkeyid": "340200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "340300",
            "label": "蚌埠市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "340302",
                "label": "龙子湖区",
                "pkeyid": "340300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340303",
                "label": "蚌山区",
                "pkeyid": "340300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340304",
                "label": "禹会区",
                "pkeyid": "340300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340311",
                "label": "淮上区",
                "pkeyid": "340300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340321",
                "label": "怀远县",
                "pkeyid": "340300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340322",
                "label": "五河县",
                "pkeyid": "340300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340323",
                "label": "固镇县",
                "pkeyid": "340300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "340400",
            "label": "淮南市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "340402",
                "label": "大通区",
                "pkeyid": "340400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340403",
                "label": "田家庵区",
                "pkeyid": "340400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340404",
                "label": "谢家集区",
                "pkeyid": "340400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340405",
                "label": "八公山区",
                "pkeyid": "340400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340406",
                "label": "潘集区",
                "pkeyid": "340400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340421",
                "label": "凤台县",
                "pkeyid": "340400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340422",
                "label": "寿县",
                "pkeyid": "340400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "340500",
            "label": "马鞍山市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "340503",
                "label": "花山区",
                "pkeyid": "340500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340504",
                "label": "雨山区",
                "pkeyid": "340500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340506",
                "label": "博望区",
                "pkeyid": "340500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340521",
                "label": "当涂县",
                "pkeyid": "340500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340522",
                "label": "含山县",
                "pkeyid": "340500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340523",
                "label": "和县",
                "pkeyid": "340500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "340600",
            "label": "淮北市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "340602",
                "label": "杜集区",
                "pkeyid": "340600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340603",
                "label": "相山区",
                "pkeyid": "340600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340604",
                "label": "烈山区",
                "pkeyid": "340600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340621",
                "label": "濉溪县",
                "pkeyid": "340600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "340700",
            "label": "铜陵市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "340705",
                "label": "铜官区",
                "pkeyid": "340700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340706",
                "label": "义安区",
                "pkeyid": "340700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340711",
                "label": "郊区",
                "pkeyid": "340700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340722",
                "label": "枞阳县",
                "pkeyid": "340700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "340800",
            "label": "安庆市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "340802",
                "label": "迎江区",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340803",
                "label": "大观区",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340811",
                "label": "宜秀区",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340822",
                "label": "怀宁县",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340824",
                "label": "潜山县",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340825",
                "label": "太湖县",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340826",
                "label": "宿松县",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340827",
                "label": "望江县",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340828",
                "label": "岳西县",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "340881",
                "label": "桐城市",
                "pkeyid": "340800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "341000",
            "label": "黄山市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "341002",
                "label": "屯溪区",
                "pkeyid": "341000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341003",
                "label": "黄山区",
                "pkeyid": "341000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341004",
                "label": "徽州区",
                "pkeyid": "341000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341021",
                "label": "歙县",
                "pkeyid": "341000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341022",
                "label": "休宁县",
                "pkeyid": "341000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341023",
                "label": "黟县",
                "pkeyid": "341000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341024",
                "label": "祁门县",
                "pkeyid": "341000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "341100",
            "label": "滁州市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "341102",
                "label": "琅琊区",
                "pkeyid": "341100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341103",
                "label": "南谯区",
                "pkeyid": "341100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341122",
                "label": "来安县",
                "pkeyid": "341100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341124",
                "label": "全椒县",
                "pkeyid": "341100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341125",
                "label": "定远县",
                "pkeyid": "341100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341126",
                "label": "凤阳县",
                "pkeyid": "341100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341181",
                "label": "天长市",
                "pkeyid": "341100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341182",
                "label": "明光市",
                "pkeyid": "341100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "341200",
            "label": "阜阳市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "341202",
                "label": "颍州区",
                "pkeyid": "341200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341203",
                "label": "颍东区",
                "pkeyid": "341200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341204",
                "label": "颍泉区",
                "pkeyid": "341200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341221",
                "label": "临泉县",
                "pkeyid": "341200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341222",
                "label": "太和县",
                "pkeyid": "341200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341225",
                "label": "阜南县",
                "pkeyid": "341200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341226",
                "label": "颍上县",
                "pkeyid": "341200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341282",
                "label": "界首市",
                "pkeyid": "341200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "341300",
            "label": "宿州市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "341302",
                "label": "埇桥区",
                "pkeyid": "341300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341321",
                "label": "砀山县",
                "pkeyid": "341300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341322",
                "label": "萧县",
                "pkeyid": "341300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341323",
                "label": "灵璧县",
                "pkeyid": "341300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341324",
                "label": "泗县",
                "pkeyid": "341300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "341500",
            "label": "六安市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "341502",
                "label": "金安区",
                "pkeyid": "341500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341503",
                "label": "裕安区",
                "pkeyid": "341500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341504",
                "label": "叶集区",
                "pkeyid": "341500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341522",
                "label": "霍邱县",
                "pkeyid": "341500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341523",
                "label": "舒城县",
                "pkeyid": "341500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341524",
                "label": "金寨县",
                "pkeyid": "341500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341525",
                "label": "霍山县",
                "pkeyid": "341500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "341600",
            "label": "亳州市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "341602",
                "label": "谯城区",
                "pkeyid": "341600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341621",
                "label": "涡阳县",
                "pkeyid": "341600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341622",
                "label": "蒙城县",
                "pkeyid": "341600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341623",
                "label": "利辛县",
                "pkeyid": "341600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "341700",
            "label": "池州市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "341702",
                "label": "贵池区",
                "pkeyid": "341700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341721",
                "label": "东至县",
                "pkeyid": "341700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341722",
                "label": "石台县",
                "pkeyid": "341700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341723",
                "label": "青阳县",
                "pkeyid": "341700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "341800",
            "label": "宣城市",
            "pkeyid": "340000",
            "code": "",
            "children": [
              {
                "keyid": "341802",
                "label": "宣州区",
                "pkeyid": "341800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341821",
                "label": "郎溪县",
                "pkeyid": "341800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341822",
                "label": "广德县",
                "pkeyid": "341800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341823",
                "label": "泾县",
                "pkeyid": "341800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341824",
                "label": "绩溪县",
                "pkeyid": "341800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341825",
                "label": "旌德县",
                "pkeyid": "341800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "341881",
                "label": "宁国市",
                "pkeyid": "341800",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "350000",
        "label": "福建省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "350100",
            "label": "福州市",
            "pkeyid": "350000",
            "code": "",
            "children": [
              {
                "keyid": "350102",
                "label": "鼓楼区",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350103",
                "label": "台江区",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350104",
                "label": "仓山区",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350105",
                "label": "马尾区",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350111",
                "label": "晋安区",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350121",
                "label": "闽侯县",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350122",
                "label": "连江县",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350123",
                "label": "罗源县",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350124",
                "label": "闽清县",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350125",
                "label": "永泰县",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350128",
                "label": "平潭县",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350181",
                "label": "福清市",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350182",
                "label": "长乐市",
                "pkeyid": "350100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "350200",
            "label": "厦门市",
            "pkeyid": "350000",
            "code": "",
            "children": [
              {
                "keyid": "350203",
                "label": "思明区",
                "pkeyid": "350200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350205",
                "label": "海沧区",
                "pkeyid": "350200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350206",
                "label": "湖里区",
                "pkeyid": "350200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350211",
                "label": "集美区",
                "pkeyid": "350200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350212",
                "label": "同安区",
                "pkeyid": "350200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350213",
                "label": "翔安区",
                "pkeyid": "350200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "350300",
            "label": "莆田市",
            "pkeyid": "350000",
            "code": "",
            "children": [
              {
                "keyid": "350302",
                "label": "城厢区",
                "pkeyid": "350300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350303",
                "label": "涵江区",
                "pkeyid": "350300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350304",
                "label": "荔城区",
                "pkeyid": "350300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350305",
                "label": "秀屿区",
                "pkeyid": "350300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350322",
                "label": "仙游县",
                "pkeyid": "350300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "350400",
            "label": "三明市",
            "pkeyid": "350000",
            "code": "",
            "children": [
              {
                "keyid": "350402",
                "label": "梅列区",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350403",
                "label": "三元区",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350421",
                "label": "明溪县",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350423",
                "label": "清流县",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350424",
                "label": "宁化县",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350425",
                "label": "大田县",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350426",
                "label": "尤溪县",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350427",
                "label": "沙县",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350428",
                "label": "将乐县",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350429",
                "label": "泰宁县",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350430",
                "label": "建宁县",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350481",
                "label": "永安市",
                "pkeyid": "350400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "350500",
            "label": "泉州市",
            "pkeyid": "350000",
            "code": "",
            "children": [
              {
                "keyid": "350502",
                "label": "鲤城区",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350503",
                "label": "丰泽区",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350504",
                "label": "洛江区",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350505",
                "label": "泉港区",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350521",
                "label": "惠安县",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350524",
                "label": "安溪县",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350525",
                "label": "永春县",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350526",
                "label": "德化县",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350527",
                "label": "金门县",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350581",
                "label": "石狮市",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350582",
                "label": "晋江市",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350583",
                "label": "南安市",
                "pkeyid": "350500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "350600",
            "label": "漳州市",
            "pkeyid": "350000",
            "code": "",
            "children": [
              {
                "keyid": "350602",
                "label": "芗城区",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350603",
                "label": "龙文区",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350622",
                "label": "云霄县",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350623",
                "label": "漳浦县",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350624",
                "label": "诏安县",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350625",
                "label": "长泰县",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350626",
                "label": "东山县",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350627",
                "label": "南靖县",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350628",
                "label": "平和县",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350629",
                "label": "华安县",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350681",
                "label": "龙海市",
                "pkeyid": "350600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "350700",
            "label": "南平市",
            "pkeyid": "350000",
            "code": "",
            "children": [
              {
                "keyid": "350702",
                "label": "延平区",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350703",
                "label": "建阳区",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350721",
                "label": "顺昌县",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350722",
                "label": "浦城县",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350723",
                "label": "光泽县",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350724",
                "label": "松溪县",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350725",
                "label": "政和县",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350781",
                "label": "邵武市",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350782",
                "label": "武夷山市",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350783",
                "label": "建瓯市",
                "pkeyid": "350700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "350800",
            "label": "龙岩市",
            "pkeyid": "350000",
            "code": "",
            "children": [
              {
                "keyid": "350802",
                "label": "新罗区",
                "pkeyid": "350800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350803",
                "label": "永定区",
                "pkeyid": "350800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350821",
                "label": "长汀县",
                "pkeyid": "350800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350823",
                "label": "上杭县",
                "pkeyid": "350800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350824",
                "label": "武平县",
                "pkeyid": "350800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350825",
                "label": "连城县",
                "pkeyid": "350800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350881",
                "label": "漳平市",
                "pkeyid": "350800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "350900",
            "label": "宁德市",
            "pkeyid": "350000",
            "code": "",
            "children": [
              {
                "keyid": "350902",
                "label": "蕉城区",
                "pkeyid": "350900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350921",
                "label": "霞浦县",
                "pkeyid": "350900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350922",
                "label": "古田县",
                "pkeyid": "350900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350923",
                "label": "屏南县",
                "pkeyid": "350900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350924",
                "label": "寿宁县",
                "pkeyid": "350900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350925",
                "label": "周宁县",
                "pkeyid": "350900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350926",
                "label": "柘荣县",
                "pkeyid": "350900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350981",
                "label": "福安市",
                "pkeyid": "350900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "350982",
                "label": "福鼎市",
                "pkeyid": "350900",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "360000",
        "label": "江西省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "360100",
            "label": "南昌市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "360102",
                "label": "东湖区",
                "pkeyid": "360100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360103",
                "label": "西湖区",
                "pkeyid": "360100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360104",
                "label": "青云谱区",
                "pkeyid": "360100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360105",
                "label": "湾里区",
                "pkeyid": "360100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360111",
                "label": "青山湖区",
                "pkeyid": "360100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360112",
                "label": "新建区",
                "pkeyid": "360100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360121",
                "label": "南昌县",
                "pkeyid": "360100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360123",
                "label": "安义县",
                "pkeyid": "360100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360124",
                "label": "进贤县",
                "pkeyid": "360100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "360200",
            "label": "景德镇市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "360202",
                "label": "昌江区",
                "pkeyid": "360200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360203",
                "label": "珠山区",
                "pkeyid": "360200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360222",
                "label": "浮梁县",
                "pkeyid": "360200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360281",
                "label": "乐平市",
                "pkeyid": "360200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "360300",
            "label": "萍乡市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "360302",
                "label": "安源区",
                "pkeyid": "360300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360313",
                "label": "湘东区",
                "pkeyid": "360300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360321",
                "label": "莲花县",
                "pkeyid": "360300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360322",
                "label": "上栗县",
                "pkeyid": "360300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360323",
                "label": "芦溪县",
                "pkeyid": "360300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "360400",
            "label": "九江市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "360402",
                "label": "濂溪区",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360403",
                "label": "浔阳区",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360421",
                "label": "九江县",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360423",
                "label": "武宁县",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360424",
                "label": "修水县",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360425",
                "label": "永修县",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360426",
                "label": "德安县",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360428",
                "label": "都昌县",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360429",
                "label": "湖口县",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360430",
                "label": "彭泽县",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360481",
                "label": "瑞昌市",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360482",
                "label": "共青城市",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360483",
                "label": "庐山市",
                "pkeyid": "360400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "360500",
            "label": "新余市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "360502",
                "label": "渝水区",
                "pkeyid": "360500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360521",
                "label": "分宜县",
                "pkeyid": "360500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "360600",
            "label": "鹰潭市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "360602",
                "label": "月湖区",
                "pkeyid": "360600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360622",
                "label": "余江县",
                "pkeyid": "360600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360681",
                "label": "贵溪市",
                "pkeyid": "360600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "360700",
            "label": "赣州市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "360702",
                "label": "章贡区",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360703",
                "label": "南康区",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360721",
                "label": "赣县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360722",
                "label": "信丰县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360723",
                "label": "大余县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360724",
                "label": "上犹县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360725",
                "label": "崇义县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360726",
                "label": "安远县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360727",
                "label": "龙南县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360728",
                "label": "定南县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360729",
                "label": "全南县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360730",
                "label": "宁都县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360731",
                "label": "于都县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360732",
                "label": "兴国县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360733",
                "label": "会昌县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360734",
                "label": "寻乌县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360735",
                "label": "石城县",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360781",
                "label": "瑞金市",
                "pkeyid": "360700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "360800",
            "label": "吉安市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "360802",
                "label": "吉州区",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360803",
                "label": "青原区",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360821",
                "label": "吉安县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360822",
                "label": "吉水县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360823",
                "label": "峡江县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360824",
                "label": "新干县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360825",
                "label": "永丰县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360826",
                "label": "泰和县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360827",
                "label": "遂川县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360828",
                "label": "万安县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360829",
                "label": "安福县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360830",
                "label": "永新县",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360881",
                "label": "井冈山市",
                "pkeyid": "360800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "360900",
            "label": "宜春市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "360902",
                "label": "袁州区",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360921",
                "label": "奉新县",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360922",
                "label": "万载县",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360923",
                "label": "上高县",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360924",
                "label": "宜丰县",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360925",
                "label": "靖安县",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360926",
                "label": "铜鼓县",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360981",
                "label": "丰城市",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360982",
                "label": "樟树市",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "360983",
                "label": "高安市",
                "pkeyid": "360900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "361000",
            "label": "抚州市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "361002",
                "label": "临川区",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361021",
                "label": "南城县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361022",
                "label": "黎川县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361023",
                "label": "南丰县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361024",
                "label": "崇仁县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361025",
                "label": "乐安县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361026",
                "label": "宜黄县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361027",
                "label": "金溪县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361028",
                "label": "资溪县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361029",
                "label": "东乡县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361030",
                "label": "广昌县",
                "pkeyid": "361000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "361100",
            "label": "上饶市",
            "pkeyid": "360000",
            "code": "",
            "children": [
              {
                "keyid": "361102",
                "label": "信州区",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361103",
                "label": "广丰区",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361121",
                "label": "上饶县",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361123",
                "label": "玉山县",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361124",
                "label": "铅山县",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361125",
                "label": "横峰县",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361126",
                "label": "弋阳县",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361127",
                "label": "余干县",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361128",
                "label": "鄱阳县",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361129",
                "label": "万年县",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361130",
                "label": "婺源县",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "361181",
                "label": "德兴市",
                "pkeyid": "361100",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "370000",
        "label": "山东省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "370100",
            "label": "济南市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "370102",
                "label": "历下区",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370103",
                "label": "市中区",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370104",
                "label": "槐荫区",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370105",
                "label": "天桥区",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370112",
                "label": "历城区",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370113",
                "label": "长清区",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370124",
                "label": "平阴县",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370125",
                "label": "济阳县",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370126",
                "label": "商河县",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370181",
                "label": "章丘市",
                "pkeyid": "370100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "370200",
            "label": "青岛市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "370202",
                "label": "市南区",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370203",
                "label": "市北区",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370211",
                "label": "黄岛区",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370212",
                "label": "崂山区",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370213",
                "label": "李沧区",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370214",
                "label": "城阳区",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370281",
                "label": "胶州市",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370282",
                "label": "即墨市",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370283",
                "label": "平度市",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370285",
                "label": "莱西市",
                "pkeyid": "370200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "370300",
            "label": "淄博市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "370302",
                "label": "淄川区",
                "pkeyid": "370300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370303",
                "label": "张店区",
                "pkeyid": "370300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370304",
                "label": "博山区",
                "pkeyid": "370300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370305",
                "label": "临淄区",
                "pkeyid": "370300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370306",
                "label": "周村区",
                "pkeyid": "370300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370321",
                "label": "桓台县",
                "pkeyid": "370300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370322",
                "label": "高青县",
                "pkeyid": "370300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370323",
                "label": "沂源县",
                "pkeyid": "370300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "370400",
            "label": "枣庄市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "370402",
                "label": "市中区",
                "pkeyid": "370400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370403",
                "label": "薛城区",
                "pkeyid": "370400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370404",
                "label": "峄城区",
                "pkeyid": "370400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370405",
                "label": "台儿庄区",
                "pkeyid": "370400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370406",
                "label": "山亭区",
                "pkeyid": "370400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370481",
                "label": "滕州市",
                "pkeyid": "370400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "370500",
            "label": "东营市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "370502",
                "label": "东营区",
                "pkeyid": "370500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370503",
                "label": "河口区",
                "pkeyid": "370500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370505",
                "label": "垦利区",
                "pkeyid": "370500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370522",
                "label": "利津县",
                "pkeyid": "370500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370523",
                "label": "广饶县",
                "pkeyid": "370500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "370600",
            "label": "烟台市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "370602",
                "label": "芝罘区",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370611",
                "label": "福山区",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370612",
                "label": "牟平区",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370613",
                "label": "莱山区",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370634",
                "label": "长岛县",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370681",
                "label": "龙口市",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370682",
                "label": "莱阳市",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370683",
                "label": "莱州市",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370684",
                "label": "蓬莱市",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370685",
                "label": "招远市",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370686",
                "label": "栖霞市",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370687",
                "label": "海阳市",
                "pkeyid": "370600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "370700",
            "label": "潍坊市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "370702",
                "label": "潍城区",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370703",
                "label": "寒亭区",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370704",
                "label": "坊子区",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370705",
                "label": "奎文区",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370724",
                "label": "临朐县",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370725",
                "label": "昌乐县",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370781",
                "label": "青州市",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370782",
                "label": "诸城市",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370783",
                "label": "寿光市",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370784",
                "label": "安丘市",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370785",
                "label": "高密市",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370786",
                "label": "昌邑市",
                "pkeyid": "370700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "370800",
            "label": "济宁市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "370811",
                "label": "任城区",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370812",
                "label": "兖州区",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370826",
                "label": "微山县",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370827",
                "label": "鱼台县",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370828",
                "label": "金乡县",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370829",
                "label": "嘉祥县",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370830",
                "label": "汶上县",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370831",
                "label": "泗水县",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370832",
                "label": "梁山县",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370881",
                "label": "曲阜市",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370883",
                "label": "邹城市",
                "pkeyid": "370800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "370900",
            "label": "泰安市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "370902",
                "label": "泰山区",
                "pkeyid": "370900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370911",
                "label": "岱岳区",
                "pkeyid": "370900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370921",
                "label": "宁阳县",
                "pkeyid": "370900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370923",
                "label": "东平县",
                "pkeyid": "370900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370982",
                "label": "新泰市",
                "pkeyid": "370900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "370983",
                "label": "肥城市",
                "pkeyid": "370900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "371000",
            "label": "威海市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "371002",
                "label": "环翠区",
                "pkeyid": "371000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371003",
                "label": "文登区",
                "pkeyid": "371000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371082",
                "label": "荣成市",
                "pkeyid": "371000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371083",
                "label": "乳山市",
                "pkeyid": "371000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "371100",
            "label": "日照市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "371102",
                "label": "东港区",
                "pkeyid": "371100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371103",
                "label": "岚山区",
                "pkeyid": "371100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371121",
                "label": "五莲县",
                "pkeyid": "371100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371122",
                "label": "莒县",
                "pkeyid": "371100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "371200",
            "label": "莱芜市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "371202",
                "label": "莱城区",
                "pkeyid": "371200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371203",
                "label": "钢城区",
                "pkeyid": "371200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "371300",
            "label": "临沂市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "371302",
                "label": "兰山区",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371311",
                "label": "罗庄区",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371312",
                "label": "河东区",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371321",
                "label": "沂南县",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371322",
                "label": "郯城县",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371323",
                "label": "沂水县",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371324",
                "label": "兰陵县",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371325",
                "label": "费县",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371326",
                "label": "平邑县",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371327",
                "label": "莒南县",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371328",
                "label": "蒙阴县",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371329",
                "label": "临沭县",
                "pkeyid": "371300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "371400",
            "label": "德州市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "371402",
                "label": "德城区",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371403",
                "label": "陵城区",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371422",
                "label": "宁津县",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371423",
                "label": "庆云县",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371424",
                "label": "临邑县",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371425",
                "label": "齐河县",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371426",
                "label": "平原县",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371427",
                "label": "夏津县",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371428",
                "label": "武城县",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371481",
                "label": "乐陵市",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371482",
                "label": "禹城市",
                "pkeyid": "371400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "371500",
            "label": "聊城市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "371502",
                "label": "东昌府区",
                "pkeyid": "371500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371521",
                "label": "阳谷县",
                "pkeyid": "371500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371522",
                "label": "莘县",
                "pkeyid": "371500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371523",
                "label": "茌平县",
                "pkeyid": "371500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371524",
                "label": "东阿县",
                "pkeyid": "371500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371525",
                "label": "冠县",
                "pkeyid": "371500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371526",
                "label": "高唐县",
                "pkeyid": "371500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371581",
                "label": "临清市",
                "pkeyid": "371500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "371600",
            "label": "滨州市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "371602",
                "label": "滨城区",
                "pkeyid": "371600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371603",
                "label": "沾化区",
                "pkeyid": "371600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371621",
                "label": "惠民县",
                "pkeyid": "371600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371622",
                "label": "阳信县",
                "pkeyid": "371600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371623",
                "label": "无棣县",
                "pkeyid": "371600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371625",
                "label": "博兴县",
                "pkeyid": "371600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371626",
                "label": "邹平县",
                "pkeyid": "371600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "371700",
            "label": "菏泽市",
            "pkeyid": "370000",
            "code": "",
            "children": [
              {
                "keyid": "371702",
                "label": "牡丹区",
                "pkeyid": "371700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371703",
                "label": "定陶区",
                "pkeyid": "371700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371721",
                "label": "曹县",
                "pkeyid": "371700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371722",
                "label": "单县",
                "pkeyid": "371700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371723",
                "label": "成武县",
                "pkeyid": "371700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371724",
                "label": "巨野县",
                "pkeyid": "371700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371725",
                "label": "郓城县",
                "pkeyid": "371700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371726",
                "label": "鄄城县",
                "pkeyid": "371700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "371728",
                "label": "东明县",
                "pkeyid": "371700",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "410000",
        "label": "河南省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "410100",
            "label": "郑州市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "410102",
                "label": "中原区",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410103",
                "label": "二七区",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410104",
                "label": "管城回族区",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410105",
                "label": "金水区",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410106",
                "label": "上街区",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410108",
                "label": "惠济区",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410122",
                "label": "中牟县",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410181",
                "label": "巩义市",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410182",
                "label": "荥阳市",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410183",
                "label": "新密市",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410184",
                "label": "新郑市",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410185",
                "label": "登封市",
                "pkeyid": "410100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "410200",
            "label": "开封市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "410202",
                "label": "龙亭区",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410203",
                "label": "顺河回族区",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410204",
                "label": "鼓楼区",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410205",
                "label": "禹王台区",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410211",
                "label": "金明区",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410212",
                "label": "祥符区",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410221",
                "label": "杞县",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410222",
                "label": "通许县",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410223",
                "label": "尉氏县",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410225",
                "label": "兰考县",
                "pkeyid": "410200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "410300",
            "label": "洛阳市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "410302",
                "label": "老城区",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410303",
                "label": "西工区",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410304",
                "label": "瀍河回族区",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410305",
                "label": "涧西区",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410306",
                "label": "吉利区",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410311",
                "label": "洛龙区",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410322",
                "label": "孟津县",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410323",
                "label": "新安县",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410324",
                "label": "栾川县",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410325",
                "label": "嵩县",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410326",
                "label": "汝阳县",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410327",
                "label": "宜阳县",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410328",
                "label": "洛宁县",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410329",
                "label": "伊川县",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410381",
                "label": "偃师市",
                "pkeyid": "410300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "410400",
            "label": "平顶山市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "410402",
                "label": "新华区",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410403",
                "label": "卫东区",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410404",
                "label": "石龙区",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410411",
                "label": "湛河区",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410421",
                "label": "宝丰县",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410422",
                "label": "叶县",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410423",
                "label": "鲁山县",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410425",
                "label": "郏县",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410481",
                "label": "舞钢市",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410482",
                "label": "汝州市",
                "pkeyid": "410400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "410500",
            "label": "安阳市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "410502",
                "label": "文峰区",
                "pkeyid": "410500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410503",
                "label": "北关区",
                "pkeyid": "410500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410505",
                "label": "殷都区",
                "pkeyid": "410500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410506",
                "label": "龙安区",
                "pkeyid": "410500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410522",
                "label": "安阳县",
                "pkeyid": "410500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410523",
                "label": "汤阴县",
                "pkeyid": "410500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410526",
                "label": "滑县",
                "pkeyid": "410500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410527",
                "label": "内黄县",
                "pkeyid": "410500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410581",
                "label": "林州市",
                "pkeyid": "410500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "410600",
            "label": "鹤壁市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "410602",
                "label": "鹤山区",
                "pkeyid": "410600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410603",
                "label": "山城区",
                "pkeyid": "410600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410611",
                "label": "淇滨区",
                "pkeyid": "410600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410621",
                "label": "浚县",
                "pkeyid": "410600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410622",
                "label": "淇县",
                "pkeyid": "410600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "410700",
            "label": "新乡市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "410702",
                "label": "红旗区",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410703",
                "label": "卫滨区",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410704",
                "label": "凤泉区",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410711",
                "label": "牧野区",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410721",
                "label": "新乡县",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410724",
                "label": "获嘉县",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410725",
                "label": "原阳县",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410726",
                "label": "延津县",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410727",
                "label": "封丘县",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410728",
                "label": "长垣县",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410781",
                "label": "卫辉市",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410782",
                "label": "辉县市",
                "pkeyid": "410700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "410800",
            "label": "焦作市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "410802",
                "label": "解放区",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410803",
                "label": "中站区",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410804",
                "label": "马村区",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410811",
                "label": "山阳区",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410821",
                "label": "修武县",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410822",
                "label": "博爱县",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410823",
                "label": "武陟县",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410825",
                "label": "温县",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410882",
                "label": "沁阳市",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410883",
                "label": "孟州市",
                "pkeyid": "410800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "410900",
            "label": "濮阳市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "410902",
                "label": "华龙区",
                "pkeyid": "410900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410922",
                "label": "清丰县",
                "pkeyid": "410900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410923",
                "label": "南乐县",
                "pkeyid": "410900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410926",
                "label": "范县",
                "pkeyid": "410900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410927",
                "label": "台前县",
                "pkeyid": "410900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "410928",
                "label": "濮阳县",
                "pkeyid": "410900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "411000",
            "label": "许昌市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "411002",
                "label": "魏都区",
                "pkeyid": "411000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411023",
                "label": "许昌县",
                "pkeyid": "411000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411024",
                "label": "鄢陵县",
                "pkeyid": "411000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411025",
                "label": "襄城县",
                "pkeyid": "411000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411081",
                "label": "禹州市",
                "pkeyid": "411000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411082",
                "label": "长葛市",
                "pkeyid": "411000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "411100",
            "label": "漯河市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "411102",
                "label": "源汇区",
                "pkeyid": "411100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411103",
                "label": "郾城区",
                "pkeyid": "411100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411104",
                "label": "召陵区",
                "pkeyid": "411100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411121",
                "label": "舞阳县",
                "pkeyid": "411100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411122",
                "label": "临颍县",
                "pkeyid": "411100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "411200",
            "label": "三门峡市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "411202",
                "label": "湖滨区",
                "pkeyid": "411200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411203",
                "label": "陕州区",
                "pkeyid": "411200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411221",
                "label": "渑池县",
                "pkeyid": "411200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411224",
                "label": "卢氏县",
                "pkeyid": "411200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411281",
                "label": "义马市",
                "pkeyid": "411200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411282",
                "label": "灵宝市",
                "pkeyid": "411200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "411300",
            "label": "南阳市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "411302",
                "label": "宛城区",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411303",
                "label": "卧龙区",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411321",
                "label": "南召县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411322",
                "label": "方城县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411323",
                "label": "西峡县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411324",
                "label": "镇平县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411325",
                "label": "内乡县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411326",
                "label": "淅川县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411327",
                "label": "社旗县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411328",
                "label": "唐河县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411329",
                "label": "新野县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411330",
                "label": "桐柏县",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411381",
                "label": "邓州市",
                "pkeyid": "411300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "411400",
            "label": "商丘市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "411402",
                "label": "梁园区",
                "pkeyid": "411400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411403",
                "label": "睢阳区",
                "pkeyid": "411400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411421",
                "label": "民权县",
                "pkeyid": "411400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411422",
                "label": "睢县",
                "pkeyid": "411400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411423",
                "label": "宁陵县",
                "pkeyid": "411400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411424",
                "label": "柘城县",
                "pkeyid": "411400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411425",
                "label": "虞城县",
                "pkeyid": "411400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411426",
                "label": "夏邑县",
                "pkeyid": "411400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411481",
                "label": "永城市",
                "pkeyid": "411400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "411500",
            "label": "信阳市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "411502",
                "label": "浉河区",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411503",
                "label": "平桥区",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411521",
                "label": "罗山县",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411522",
                "label": "光山县",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411523",
                "label": "新县",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411524",
                "label": "商城县",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411525",
                "label": "固始县",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411526",
                "label": "潢川县",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411527",
                "label": "淮滨县",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411528",
                "label": "息县",
                "pkeyid": "411500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "411600",
            "label": "周口市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "411602",
                "label": "川汇区",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411621",
                "label": "扶沟县",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411622",
                "label": "西华县",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411623",
                "label": "商水县",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411624",
                "label": "沈丘县",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411625",
                "label": "郸城县",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411626",
                "label": "淮阳县",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411627",
                "label": "太康县",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411628",
                "label": "鹿邑县",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411681",
                "label": "项城市",
                "pkeyid": "411600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "411700",
            "label": "驻马店市",
            "pkeyid": "410000",
            "code": "",
            "children": [
              {
                "keyid": "411702",
                "label": "驿城区",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411721",
                "label": "西平县",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411722",
                "label": "上蔡县",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411723",
                "label": "平舆县",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411724",
                "label": "正阳县",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411725",
                "label": "确山县",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411726",
                "label": "泌阳县",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411727",
                "label": "汝南县",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411728",
                "label": "遂平县",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "411729",
                "label": "新蔡县",
                "pkeyid": "411700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "411800",
            "label": "济源市",
            "pkeyid": "410000",
            "code": "",
            "children": ""
          }
        ]
      },
      {
        "keyid": "420000",
        "label": "湖北省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "420100",
            "label": "武汉市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "420102",
                "label": "江岸区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420103",
                "label": "江汉区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420104",
                "label": "硚口区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420105",
                "label": "汉阳区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420106",
                "label": "武昌区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420107",
                "label": "青山区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420111",
                "label": "洪山区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420112",
                "label": "东西湖区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420113",
                "label": "汉南区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420114",
                "label": "蔡甸区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420115",
                "label": "江夏区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420116",
                "label": "黄陂区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420117",
                "label": "新洲区",
                "pkeyid": "420100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "420200",
            "label": "黄石市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "420202",
                "label": "黄石港区",
                "pkeyid": "420200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420203",
                "label": "西塞山区",
                "pkeyid": "420200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420204",
                "label": "下陆区",
                "pkeyid": "420200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420205",
                "label": "铁山区",
                "pkeyid": "420200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420222",
                "label": "阳新县",
                "pkeyid": "420200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420281",
                "label": "大冶市",
                "pkeyid": "420200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "420300",
            "label": "十堰市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "420302",
                "label": "茅箭区",
                "pkeyid": "420300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420303",
                "label": "张湾区",
                "pkeyid": "420300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420304",
                "label": "郧阳区",
                "pkeyid": "420300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420322",
                "label": "郧西县",
                "pkeyid": "420300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420323",
                "label": "竹山县",
                "pkeyid": "420300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420324",
                "label": "竹溪县",
                "pkeyid": "420300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420325",
                "label": "房县",
                "pkeyid": "420300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420381",
                "label": "丹江口市",
                "pkeyid": "420300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "420500",
            "label": "宜昌市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "420502",
                "label": "西陵区",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420503",
                "label": "伍家岗区",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420504",
                "label": "点军区",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420505",
                "label": "猇亭区",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420506",
                "label": "夷陵区",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420525",
                "label": "远安县",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420526",
                "label": "兴山县",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420527",
                "label": "秭归县",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420528",
                "label": "长阳土家族自治县",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420529",
                "label": "五峰土家族自治县",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420581",
                "label": "宜都市",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420582",
                "label": "当阳市",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420583",
                "label": "枝江市",
                "pkeyid": "420500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "420600",
            "label": "襄阳市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "420602",
                "label": "襄城区",
                "pkeyid": "420600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420606",
                "label": "樊城区",
                "pkeyid": "420600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420607",
                "label": "襄州区",
                "pkeyid": "420600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420624",
                "label": "南漳县",
                "pkeyid": "420600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420625",
                "label": "谷城县",
                "pkeyid": "420600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420626",
                "label": "保康县",
                "pkeyid": "420600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420682",
                "label": "老河口市",
                "pkeyid": "420600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420683",
                "label": "枣阳市",
                "pkeyid": "420600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420684",
                "label": "宜城市",
                "pkeyid": "420600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "420700",
            "label": "鄂州市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "420702",
                "label": "梁子湖区",
                "pkeyid": "420700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420703",
                "label": "华容区",
                "pkeyid": "420700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420704",
                "label": "鄂城区",
                "pkeyid": "420700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "420800",
            "label": "荆门市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "420802",
                "label": "东宝区",
                "pkeyid": "420800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420804",
                "label": "掇刀区",
                "pkeyid": "420800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420821",
                "label": "京山县",
                "pkeyid": "420800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420822",
                "label": "沙洋县",
                "pkeyid": "420800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420881",
                "label": "钟祥市",
                "pkeyid": "420800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "420900",
            "label": "孝感市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "420902",
                "label": "孝南区",
                "pkeyid": "420900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420921",
                "label": "孝昌县",
                "pkeyid": "420900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420922",
                "label": "大悟县",
                "pkeyid": "420900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420923",
                "label": "云梦县",
                "pkeyid": "420900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420981",
                "label": "应城市",
                "pkeyid": "420900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420982",
                "label": "安陆市",
                "pkeyid": "420900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "420984",
                "label": "汉川市",
                "pkeyid": "420900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "421000",
            "label": "荆州市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "421002",
                "label": "沙市区",
                "pkeyid": "421000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421003",
                "label": "荆州区",
                "pkeyid": "421000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421022",
                "label": "公安县",
                "pkeyid": "421000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421023",
                "label": "监利县",
                "pkeyid": "421000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421024",
                "label": "江陵县",
                "pkeyid": "421000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421081",
                "label": "石首市",
                "pkeyid": "421000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421083",
                "label": "洪湖市",
                "pkeyid": "421000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421087",
                "label": "松滋市",
                "pkeyid": "421000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "421100",
            "label": "黄冈市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "421102",
                "label": "黄州区",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421121",
                "label": "团风县",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421122",
                "label": "红安县",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421123",
                "label": "罗田县",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421124",
                "label": "英山县",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421125",
                "label": "浠水县",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421126",
                "label": "蕲春县",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421127",
                "label": "黄梅县",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421181",
                "label": "麻城市",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421182",
                "label": "武穴市",
                "pkeyid": "421100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "421200",
            "label": "咸宁市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "421202",
                "label": "咸安区",
                "pkeyid": "421200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421221",
                "label": "嘉鱼县",
                "pkeyid": "421200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421222",
                "label": "通城县",
                "pkeyid": "421200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421223",
                "label": "崇阳县",
                "pkeyid": "421200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421224",
                "label": "通山县",
                "pkeyid": "421200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421281",
                "label": "赤壁市",
                "pkeyid": "421200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "421300",
            "label": "随州市",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "421303",
                "label": "曾都区",
                "pkeyid": "421300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421321",
                "label": "随县",
                "pkeyid": "421300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "421381",
                "label": "广水市",
                "pkeyid": "421300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "421400",
            "label": "仙桃市",
            "pkeyid": "420000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "421500",
            "label": "潜江市",
            "pkeyid": "420000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "421600",
            "label": "天门市",
            "pkeyid": "420000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "421700",
            "label": "神农架林区",
            "pkeyid": "420000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "422800",
            "label": "恩施土家族苗族自治州",
            "pkeyid": "420000",
            "code": "",
            "children": [
              {
                "keyid": "422801",
                "label": "恩施市",
                "pkeyid": "422800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "422802",
                "label": "利川市",
                "pkeyid": "422800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "422822",
                "label": "建始县",
                "pkeyid": "422800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "422823",
                "label": "巴东县",
                "pkeyid": "422800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "422825",
                "label": "宣恩县",
                "pkeyid": "422800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "422826",
                "label": "咸丰县",
                "pkeyid": "422800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "422827",
                "label": "来凤县",
                "pkeyid": "422800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "422828",
                "label": "鹤峰县",
                "pkeyid": "422800",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "430000",
        "label": "湖南省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "430100",
            "label": "长沙市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "430102",
                "label": "芙蓉区",
                "pkeyid": "430100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430103",
                "label": "天心区",
                "pkeyid": "430100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430104",
                "label": "岳麓区",
                "pkeyid": "430100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430105",
                "label": "开福区",
                "pkeyid": "430100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430111",
                "label": "雨花区",
                "pkeyid": "430100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430112",
                "label": "望城区",
                "pkeyid": "430100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430121",
                "label": "长沙县",
                "pkeyid": "430100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430124",
                "label": "宁乡县",
                "pkeyid": "430100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430181",
                "label": "浏阳市",
                "pkeyid": "430100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "430200",
            "label": "株洲市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "430202",
                "label": "荷塘区",
                "pkeyid": "430200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430203",
                "label": "芦淞区",
                "pkeyid": "430200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430204",
                "label": "石峰区",
                "pkeyid": "430200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430211",
                "label": "天元区",
                "pkeyid": "430200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430221",
                "label": "株洲县",
                "pkeyid": "430200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430223",
                "label": "攸县",
                "pkeyid": "430200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430224",
                "label": "茶陵县",
                "pkeyid": "430200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430225",
                "label": "炎陵县",
                "pkeyid": "430200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430281",
                "label": "醴陵市",
                "pkeyid": "430200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "430300",
            "label": "湘潭市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "430302",
                "label": "雨湖区",
                "pkeyid": "430300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430304",
                "label": "岳塘区",
                "pkeyid": "430300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430321",
                "label": "湘潭县",
                "pkeyid": "430300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430381",
                "label": "湘乡市",
                "pkeyid": "430300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430382",
                "label": "韶山市",
                "pkeyid": "430300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "430400",
            "label": "衡阳市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "430405",
                "label": "珠晖区",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430406",
                "label": "雁峰区",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430407",
                "label": "石鼓区",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430408",
                "label": "蒸湘区",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430412",
                "label": "南岳区",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430421",
                "label": "衡阳县",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430422",
                "label": "衡南县",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430423",
                "label": "衡山县",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430424",
                "label": "衡东县",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430426",
                "label": "祁东县",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430481",
                "label": "耒阳市",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430482",
                "label": "常宁市",
                "pkeyid": "430400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "430500",
            "label": "邵阳市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "430502",
                "label": "双清区",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430503",
                "label": "大祥区",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430511",
                "label": "北塔区",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430521",
                "label": "邵东县",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430522",
                "label": "新邵县",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430523",
                "label": "邵阳县",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430524",
                "label": "隆回县",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430525",
                "label": "洞口县",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430527",
                "label": "绥宁县",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430528",
                "label": "新宁县",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430529",
                "label": "城步苗族自治县",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430581",
                "label": "武冈市",
                "pkeyid": "430500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "430600",
            "label": "岳阳市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "430602",
                "label": "岳阳楼区",
                "pkeyid": "430600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430603",
                "label": "云溪区",
                "pkeyid": "430600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430611",
                "label": "君山区",
                "pkeyid": "430600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430621",
                "label": "岳阳县",
                "pkeyid": "430600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430623",
                "label": "华容县",
                "pkeyid": "430600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430624",
                "label": "湘阴县",
                "pkeyid": "430600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430626",
                "label": "平江县",
                "pkeyid": "430600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430681",
                "label": "汨罗市",
                "pkeyid": "430600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430682",
                "label": "临湘市",
                "pkeyid": "430600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "430700",
            "label": "常德市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "430702",
                "label": "武陵区",
                "pkeyid": "430700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430703",
                "label": "鼎城区",
                "pkeyid": "430700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430721",
                "label": "安乡县",
                "pkeyid": "430700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430722",
                "label": "汉寿县",
                "pkeyid": "430700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430723",
                "label": "澧县",
                "pkeyid": "430700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430724",
                "label": "临澧县",
                "pkeyid": "430700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430725",
                "label": "桃源县",
                "pkeyid": "430700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430726",
                "label": "石门县",
                "pkeyid": "430700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430781",
                "label": "津市市",
                "pkeyid": "430700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "430800",
            "label": "张家界市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "430802",
                "label": "永定区",
                "pkeyid": "430800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430811",
                "label": "武陵源区",
                "pkeyid": "430800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430821",
                "label": "慈利县",
                "pkeyid": "430800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430822",
                "label": "桑植县",
                "pkeyid": "430800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "430900",
            "label": "益阳市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "430902",
                "label": "资阳区",
                "pkeyid": "430900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430903",
                "label": "赫山区",
                "pkeyid": "430900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430921",
                "label": "南县",
                "pkeyid": "430900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430922",
                "label": "桃江县",
                "pkeyid": "430900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430923",
                "label": "安化县",
                "pkeyid": "430900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "430981",
                "label": "沅江市",
                "pkeyid": "430900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "431000",
            "label": "郴州市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "431002",
                "label": "北湖区",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431003",
                "label": "苏仙区",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431021",
                "label": "桂阳县",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431022",
                "label": "宜章县",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431023",
                "label": "永兴县",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431024",
                "label": "嘉禾县",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431025",
                "label": "临武县",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431026",
                "label": "汝城县",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431027",
                "label": "桂东县",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431028",
                "label": "安仁县",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431081",
                "label": "资兴市",
                "pkeyid": "431000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "431100",
            "label": "永州市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "431102",
                "label": "零陵区",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431103",
                "label": "冷水滩区",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431121",
                "label": "祁阳县",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431122",
                "label": "东安县",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431123",
                "label": "双牌县",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431124",
                "label": "道县",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431125",
                "label": "江永县",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431126",
                "label": "宁远县",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431127",
                "label": "蓝山县",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431128",
                "label": "新田县",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431129",
                "label": "江华瑶族自治县",
                "pkeyid": "431100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "431200",
            "label": "怀化市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "431202",
                "label": "鹤城区",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431221",
                "label": "中方县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431222",
                "label": "沅陵县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431223",
                "label": "辰溪县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431224",
                "label": "溆浦县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431225",
                "label": "会同县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431226",
                "label": "麻阳苗族自治县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431227",
                "label": "新晃侗族自治县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431228",
                "label": "芷江侗族自治县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431229",
                "label": "靖州苗族侗族自治县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431230",
                "label": "通道侗族自治县",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431281",
                "label": "洪江市",
                "pkeyid": "431200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "431300",
            "label": "娄底市",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "431302",
                "label": "娄星区",
                "pkeyid": "431300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431321",
                "label": "双峰县",
                "pkeyid": "431300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431322",
                "label": "新化县",
                "pkeyid": "431300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431381",
                "label": "冷水江市",
                "pkeyid": "431300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "431382",
                "label": "涟源市",
                "pkeyid": "431300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "433100",
            "label": "湘西土家族苗族自治州",
            "pkeyid": "430000",
            "code": "",
            "children": [
              {
                "keyid": "433101",
                "label": "吉首市",
                "pkeyid": "433100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "433122",
                "label": "泸溪县",
                "pkeyid": "433100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "433123",
                "label": "凤凰县",
                "pkeyid": "433100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "433124",
                "label": "花垣县",
                "pkeyid": "433100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "433125",
                "label": "保靖县",
                "pkeyid": "433100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "433126",
                "label": "古丈县",
                "pkeyid": "433100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "433127",
                "label": "永顺县",
                "pkeyid": "433100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "433130",
                "label": "龙山县",
                "pkeyid": "433100",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "440000",
        "label": "广东省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "440100",
            "label": "广州市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "440103",
                "label": "荔湾区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440104",
                "label": "越秀区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440105",
                "label": "海珠区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440106",
                "label": "天河区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440111",
                "label": "白云区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440112",
                "label": "黄埔区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440113",
                "label": "番禺区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440114",
                "label": "花都区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440115",
                "label": "南沙区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440117",
                "label": "从化区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440118",
                "label": "增城区",
                "pkeyid": "440100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "440200",
            "label": "韶关市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "440203",
                "label": "武江区",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440204",
                "label": "浈江区",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440205",
                "label": "曲江区",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440222",
                "label": "始兴县",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440224",
                "label": "仁化县",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440229",
                "label": "翁源县",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440232",
                "label": "乳源瑶族自治县",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440233",
                "label": "新丰县",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440281",
                "label": "乐昌市",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440282",
                "label": "南雄市",
                "pkeyid": "440200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "440300",
            "label": "深圳市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "440303",
                "label": "罗湖区",
                "pkeyid": "440300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440304",
                "label": "福田区",
                "pkeyid": "440300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440305",
                "label": "南山区",
                "pkeyid": "440300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440306",
                "label": "宝安区",
                "pkeyid": "440300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440307",
                "label": "龙岗区",
                "pkeyid": "440300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440308",
                "label": "盐田区",
                "pkeyid": "440300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "440400",
            "label": "珠海市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "440402",
                "label": "香洲区",
                "pkeyid": "440400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440403",
                "label": "斗门区",
                "pkeyid": "440400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440404",
                "label": "金湾区",
                "pkeyid": "440400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "440500",
            "label": "汕头市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "440507",
                "label": "龙湖区",
                "pkeyid": "440500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440511",
                "label": "金平区",
                "pkeyid": "440500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440512",
                "label": "濠江区",
                "pkeyid": "440500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440513",
                "label": "潮阳区",
                "pkeyid": "440500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440514",
                "label": "潮南区",
                "pkeyid": "440500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440515",
                "label": "澄海区",
                "pkeyid": "440500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440523",
                "label": "南澳县",
                "pkeyid": "440500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "440600",
            "label": "佛山市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "440604",
                "label": "禅城区",
                "pkeyid": "440600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440605",
                "label": "南海区",
                "pkeyid": "440600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440606",
                "label": "顺德区",
                "pkeyid": "440600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440607",
                "label": "三水区",
                "pkeyid": "440600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440608",
                "label": "高明区",
                "pkeyid": "440600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "440700",
            "label": "江门市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "440703",
                "label": "蓬江区",
                "pkeyid": "440700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440704",
                "label": "江海区",
                "pkeyid": "440700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440705",
                "label": "新会区",
                "pkeyid": "440700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440781",
                "label": "台山市",
                "pkeyid": "440700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440783",
                "label": "开平市",
                "pkeyid": "440700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440784",
                "label": "鹤山市",
                "pkeyid": "440700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440785",
                "label": "恩平市",
                "pkeyid": "440700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "440800",
            "label": "湛江市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "440802",
                "label": "赤坎区",
                "pkeyid": "440800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440803",
                "label": "霞山区",
                "pkeyid": "440800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440804",
                "label": "坡头区",
                "pkeyid": "440800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440811",
                "label": "麻章区",
                "pkeyid": "440800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440823",
                "label": "遂溪县",
                "pkeyid": "440800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440825",
                "label": "徐闻县",
                "pkeyid": "440800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440881",
                "label": "廉江市",
                "pkeyid": "440800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440882",
                "label": "雷州市",
                "pkeyid": "440800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440883",
                "label": "吴川市",
                "pkeyid": "440800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "440900",
            "label": "茂名市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "440902",
                "label": "茂南区",
                "pkeyid": "440900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440904",
                "label": "电白区",
                "pkeyid": "440900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440981",
                "label": "高州市",
                "pkeyid": "440900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440982",
                "label": "化州市",
                "pkeyid": "440900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "440983",
                "label": "信宜市",
                "pkeyid": "440900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "441200",
            "label": "肇庆市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "441202",
                "label": "端州区",
                "pkeyid": "441200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441203",
                "label": "鼎湖区",
                "pkeyid": "441200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441204",
                "label": "高要区",
                "pkeyid": "441200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441223",
                "label": "广宁县",
                "pkeyid": "441200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441224",
                "label": "怀集县",
                "pkeyid": "441200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441225",
                "label": "封开县",
                "pkeyid": "441200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441226",
                "label": "德庆县",
                "pkeyid": "441200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441284",
                "label": "四会市",
                "pkeyid": "441200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "441300",
            "label": "惠州市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "441302",
                "label": "惠城区",
                "pkeyid": "441300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441303",
                "label": "惠阳区",
                "pkeyid": "441300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441322",
                "label": "博罗县",
                "pkeyid": "441300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441323",
                "label": "惠东县",
                "pkeyid": "441300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441324",
                "label": "龙门县",
                "pkeyid": "441300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "441400",
            "label": "梅州市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "441402",
                "label": "梅江区",
                "pkeyid": "441400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441403",
                "label": "梅县区",
                "pkeyid": "441400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441422",
                "label": "大埔县",
                "pkeyid": "441400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441423",
                "label": "丰顺县",
                "pkeyid": "441400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441424",
                "label": "五华县",
                "pkeyid": "441400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441426",
                "label": "平远县",
                "pkeyid": "441400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441427",
                "label": "蕉岭县",
                "pkeyid": "441400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441481",
                "label": "兴宁市",
                "pkeyid": "441400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "441500",
            "label": "汕尾市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "441502",
                "label": "城区",
                "pkeyid": "441500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441521",
                "label": "海丰县",
                "pkeyid": "441500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441523",
                "label": "陆河县",
                "pkeyid": "441500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441581",
                "label": "陆丰市",
                "pkeyid": "441500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "441600",
            "label": "河源市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "441602",
                "label": "源城区",
                "pkeyid": "441600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441621",
                "label": "紫金县",
                "pkeyid": "441600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441622",
                "label": "龙川县",
                "pkeyid": "441600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441623",
                "label": "连平县",
                "pkeyid": "441600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441624",
                "label": "和平县",
                "pkeyid": "441600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441625",
                "label": "东源县",
                "pkeyid": "441600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "441700",
            "label": "阳江市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "441702",
                "label": "江城区",
                "pkeyid": "441700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441704",
                "label": "阳东区",
                "pkeyid": "441700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441721",
                "label": "阳西县",
                "pkeyid": "441700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441781",
                "label": "阳春市",
                "pkeyid": "441700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "441800",
            "label": "清远市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "441802",
                "label": "清城区",
                "pkeyid": "441800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441803",
                "label": "清新区",
                "pkeyid": "441800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441821",
                "label": "佛冈县",
                "pkeyid": "441800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441823",
                "label": "阳山县",
                "pkeyid": "441800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441825",
                "label": "连山壮族瑶族自治县",
                "pkeyid": "441800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441826",
                "label": "连南瑶族自治县",
                "pkeyid": "441800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441881",
                "label": "英德市",
                "pkeyid": "441800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "441882",
                "label": "连州市",
                "pkeyid": "441800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "441900",
            "label": "东莞市",
            "pkeyid": "440000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "442000",
            "label": "中山市",
            "pkeyid": "440000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "445100",
            "label": "潮州市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "445102",
                "label": "湘桥区",
                "pkeyid": "445100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445103",
                "label": "潮安区",
                "pkeyid": "445100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445122",
                "label": "饶平县",
                "pkeyid": "445100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "445200",
            "label": "揭阳市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "445202",
                "label": "榕城区",
                "pkeyid": "445200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445203",
                "label": "揭东区",
                "pkeyid": "445200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445222",
                "label": "揭西县",
                "pkeyid": "445200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445224",
                "label": "惠来县",
                "pkeyid": "445200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445281",
                "label": "普宁市",
                "pkeyid": "445200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "445300",
            "label": "云浮市",
            "pkeyid": "440000",
            "code": "",
            "children": [
              {
                "keyid": "445302",
                "label": "云城区",
                "pkeyid": "445300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445303",
                "label": "云安区",
                "pkeyid": "445300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445321",
                "label": "新兴县",
                "pkeyid": "445300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445322",
                "label": "郁南县",
                "pkeyid": "445300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "445381",
                "label": "罗定市",
                "pkeyid": "445300",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "450000",
        "label": "广西壮族自治区",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "450100",
            "label": "南宁市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "450102",
                "label": "兴宁区",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450103",
                "label": "青秀区",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450105",
                "label": "江南区",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450107",
                "label": "西乡塘区",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450108",
                "label": "良庆区",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450109",
                "label": "邕宁区",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450110",
                "label": "武鸣区",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450123",
                "label": "隆安县",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450124",
                "label": "马山县",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450125",
                "label": "上林县",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450126",
                "label": "宾阳县",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450127",
                "label": "横县",
                "pkeyid": "450100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "450200",
            "label": "柳州市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "450202",
                "label": "城中区",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450203",
                "label": "鱼峰区",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450204",
                "label": "柳南区",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450205",
                "label": "柳北区",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450206",
                "label": "柳江区",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450222",
                "label": "柳城县",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450223",
                "label": "鹿寨县",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450224",
                "label": "融安县",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450225",
                "label": "融水苗族自治县",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450226",
                "label": "三江侗族自治县",
                "pkeyid": "450200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "450300",
            "label": "桂林市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "450302",
                "label": "秀峰区",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450303",
                "label": "叠彩区",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450304",
                "label": "象山区",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450305",
                "label": "七星区",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450311",
                "label": "雁山区",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450312",
                "label": "临桂区",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450321",
                "label": "阳朔县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450323",
                "label": "灵川县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450324",
                "label": "全州县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450325",
                "label": "兴安县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450326",
                "label": "永福县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450327",
                "label": "灌阳县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450328",
                "label": "龙胜各族自治县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450329",
                "label": "资源县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450330",
                "label": "平乐县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450331",
                "label": "荔浦县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450332",
                "label": "恭城瑶族自治县",
                "pkeyid": "450300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "450400",
            "label": "梧州市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "450403",
                "label": "万秀区",
                "pkeyid": "450400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450405",
                "label": "长洲区",
                "pkeyid": "450400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450406",
                "label": "龙圩区",
                "pkeyid": "450400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450421",
                "label": "苍梧县",
                "pkeyid": "450400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450422",
                "label": "藤县",
                "pkeyid": "450400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450423",
                "label": "蒙山县",
                "pkeyid": "450400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450481",
                "label": "岑溪市",
                "pkeyid": "450400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "450500",
            "label": "北海市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "450502",
                "label": "海城区",
                "pkeyid": "450500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450503",
                "label": "银海区",
                "pkeyid": "450500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450512",
                "label": "铁山港区",
                "pkeyid": "450500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450521",
                "label": "合浦县",
                "pkeyid": "450500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "450600",
            "label": "防城港市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "450602",
                "label": "港口区",
                "pkeyid": "450600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450603",
                "label": "防城区",
                "pkeyid": "450600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450621",
                "label": "上思县",
                "pkeyid": "450600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450681",
                "label": "东兴市",
                "pkeyid": "450600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "450700",
            "label": "钦州市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "450702",
                "label": "钦南区",
                "pkeyid": "450700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450703",
                "label": "钦北区",
                "pkeyid": "450700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450721",
                "label": "灵山县",
                "pkeyid": "450700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450722",
                "label": "浦北县",
                "pkeyid": "450700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "450800",
            "label": "贵港市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "450802",
                "label": "港北区",
                "pkeyid": "450800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450803",
                "label": "港南区",
                "pkeyid": "450800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450804",
                "label": "覃塘区",
                "pkeyid": "450800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450821",
                "label": "平南县",
                "pkeyid": "450800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450881",
                "label": "桂平市",
                "pkeyid": "450800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "450900",
            "label": "玉林市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "450902",
                "label": "玉州区",
                "pkeyid": "450900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450903",
                "label": "福绵区",
                "pkeyid": "450900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450921",
                "label": "容县",
                "pkeyid": "450900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450922",
                "label": "陆川县",
                "pkeyid": "450900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450923",
                "label": "博白县",
                "pkeyid": "450900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450924",
                "label": "兴业县",
                "pkeyid": "450900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "450981",
                "label": "北流市",
                "pkeyid": "450900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "451000",
            "label": "百色市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "451002",
                "label": "右江区",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451021",
                "label": "田阳县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451022",
                "label": "田东县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451023",
                "label": "平果县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451024",
                "label": "德保县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451026",
                "label": "那坡县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451027",
                "label": "凌云县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451028",
                "label": "乐业县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451029",
                "label": "田林县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451030",
                "label": "西林县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451031",
                "label": "隆林各族自治县",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451081",
                "label": "靖西市",
                "pkeyid": "451000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "451100",
            "label": "贺州市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "451102",
                "label": "八步区",
                "pkeyid": "451100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451103",
                "label": "平桂区",
                "pkeyid": "451100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451121",
                "label": "昭平县",
                "pkeyid": "451100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451122",
                "label": "钟山县",
                "pkeyid": "451100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451123",
                "label": "富川瑶族自治县",
                "pkeyid": "451100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "451200",
            "label": "河池市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "451202",
                "label": "金城江区",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451221",
                "label": "南丹县",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451222",
                "label": "天峨县",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451223",
                "label": "凤山县",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451224",
                "label": "东兰县",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451225",
                "label": "罗城仫佬族自治县",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451226",
                "label": "环江毛南族自治县",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451227",
                "label": "巴马瑶族自治县",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451228",
                "label": "都安瑶族自治县",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451229",
                "label": "大化瑶族自治县",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451281",
                "label": "宜州市",
                "pkeyid": "451200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "451300",
            "label": "来宾市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "451302",
                "label": "兴宾区",
                "pkeyid": "451300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451321",
                "label": "忻城县",
                "pkeyid": "451300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451322",
                "label": "象州县",
                "pkeyid": "451300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451323",
                "label": "武宣县",
                "pkeyid": "451300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451324",
                "label": "金秀瑶族自治县",
                "pkeyid": "451300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451381",
                "label": "合山市",
                "pkeyid": "451300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "451400",
            "label": "崇左市",
            "pkeyid": "450000",
            "code": "",
            "children": [
              {
                "keyid": "451402",
                "label": "江州区",
                "pkeyid": "451400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451421",
                "label": "扶绥县",
                "pkeyid": "451400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451422",
                "label": "宁明县",
                "pkeyid": "451400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451423",
                "label": "龙州县",
                "pkeyid": "451400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451424",
                "label": "大新县",
                "pkeyid": "451400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451425",
                "label": "天等县",
                "pkeyid": "451400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "451481",
                "label": "凭祥市",
                "pkeyid": "451400",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "460000",
        "label": "海南省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "460100",
            "label": "海口市",
            "pkeyid": "460000",
            "code": "",
            "children": [
              {
                "keyid": "460105",
                "label": "秀英区",
                "pkeyid": "460100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "460106",
                "label": "龙华区",
                "pkeyid": "460100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "460107",
                "label": "琼山区",
                "pkeyid": "460100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "460108",
                "label": "美兰区",
                "pkeyid": "460100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "460200",
            "label": "三亚市",
            "pkeyid": "460000",
            "code": "",
            "children": [
              {
                "keyid": "460202",
                "label": "海棠区",
                "pkeyid": "460200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "460203",
                "label": "吉阳区",
                "pkeyid": "460200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "460204",
                "label": "天涯区",
                "pkeyid": "460200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "460205",
                "label": "崖州区",
                "pkeyid": "460200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "460300",
            "label": "三沙市",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "460400",
            "label": "儋州市",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "460500",
            "label": "五指山市",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "460600",
            "label": "琼海市",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "460700",
            "label": "文昌市",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "460800",
            "label": "万宁市",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "460900",
            "label": "东方市",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461000",
            "label": "定安县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461100",
            "label": "屯昌县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461200",
            "label": "澄迈县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461300",
            "label": "临高县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461400",
            "label": "白沙黎族自治县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461500",
            "label": "昌江黎族自治县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461600",
            "label": "乐东黎族自治县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461700",
            "label": "陵水黎族自治县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461800",
            "label": "保亭黎族苗族自治县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "461900",
            "label": "琼中黎族苗族自治县",
            "pkeyid": "460000",
            "code": "",
            "children": ""
          }
        ]
      },
      {
        "keyid": "500000",
        "label": "重庆市",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "500101",
            "label": "万州区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500102",
            "label": "涪陵区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500103",
            "label": "渝中区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500104",
            "label": "大渡口区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500105",
            "label": "江北区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500106",
            "label": "沙坪坝区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500107",
            "label": "九龙坡区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500108",
            "label": "南岸区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500109",
            "label": "北碚区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500110",
            "label": "綦江区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500111",
            "label": "大足区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500112",
            "label": "渝北区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500113",
            "label": "巴南区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500114",
            "label": "黔江区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500115",
            "label": "长寿区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500116",
            "label": "江津区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500117",
            "label": "合川区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500118",
            "label": "永川区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500119",
            "label": "南川区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500120",
            "label": "璧山区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500128",
            "label": "梁平县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500129",
            "label": "城口县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500130",
            "label": "丰都县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500131",
            "label": "垫江县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500132",
            "label": "武隆县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500133",
            "label": "忠县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500135",
            "label": "云阳县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500136",
            "label": "奉节县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500137",
            "label": "巫山县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500138",
            "label": "巫溪县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500140",
            "label": "石柱土家族自治县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500141",
            "label": "秀山土家族苗族自治县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500142",
            "label": "酉阳土家族苗族自治县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500143",
            "label": "彭水苗族土家族自治县",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500151",
            "label": "铜梁区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500152",
            "label": "潼南区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500153",
            "label": "荣昌区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "500154",
            "label": "开州区",
            "pkeyid": "500000",
            "code": "",
            "children": ""
          }
        ]
      },
      {
        "keyid": "510000",
        "label": "四川省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "510100",
            "label": "成都市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "510104",
                "label": "锦江区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510105",
                "label": "青羊区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510106",
                "label": "金牛区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510107",
                "label": "武侯区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510108",
                "label": "成华区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510109",
                "label": "高新区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510112",
                "label": "龙泉驿区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510113",
                "label": "青白江区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510114",
                "label": "新都区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510115",
                "label": "温江区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510116",
                "label": "双流区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510121",
                "label": "金堂县",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510124",
                "label": "郫都区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510129",
                "label": "大邑县",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510131",
                "label": "蒲江县",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510132",
                "label": "新津县",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510141",
                "label": "天府新区",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510181",
                "label": "都江堰市",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510182",
                "label": "彭州市",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510183",
                "label": "邛崃市",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510184",
                "label": "崇州市",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510185",
                "label": "简阳市",
                "pkeyid": "510100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "510300",
            "label": "自贡市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "510302",
                "label": "自流井区",
                "pkeyid": "510300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510303",
                "label": "贡井区",
                "pkeyid": "510300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510304",
                "label": "大安区",
                "pkeyid": "510300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510311",
                "label": "沿滩区",
                "pkeyid": "510300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510321",
                "label": "荣县",
                "pkeyid": "510300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510322",
                "label": "富顺县",
                "pkeyid": "510300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "510400",
            "label": "攀枝花市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "510402",
                "label": "东区",
                "pkeyid": "510400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510403",
                "label": "西区",
                "pkeyid": "510400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510411",
                "label": "仁和区",
                "pkeyid": "510400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510421",
                "label": "米易县",
                "pkeyid": "510400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510422",
                "label": "盐边县",
                "pkeyid": "510400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "510500",
            "label": "泸州市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "510502",
                "label": "江阳区",
                "pkeyid": "510500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510503",
                "label": "纳溪区",
                "pkeyid": "510500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510504",
                "label": "龙马潭区",
                "pkeyid": "510500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510521",
                "label": "泸县",
                "pkeyid": "510500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510522",
                "label": "合江县",
                "pkeyid": "510500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510524",
                "label": "叙永县",
                "pkeyid": "510500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510525",
                "label": "古蔺县",
                "pkeyid": "510500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "510600",
            "label": "德阳市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "510603",
                "label": "旌阳区",
                "pkeyid": "510600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510623",
                "label": "中江县",
                "pkeyid": "510600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510626",
                "label": "罗江县",
                "pkeyid": "510600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510681",
                "label": "广汉市",
                "pkeyid": "510600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510682",
                "label": "什邡市",
                "pkeyid": "510600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510683",
                "label": "绵竹市",
                "pkeyid": "510600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "510700",
            "label": "绵阳市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "510703",
                "label": "涪城区",
                "pkeyid": "510700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510704",
                "label": "游仙区",
                "pkeyid": "510700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510705",
                "label": "安州区",
                "pkeyid": "510700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510722",
                "label": "三台县",
                "pkeyid": "510700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510723",
                "label": "盐亭县",
                "pkeyid": "510700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510725",
                "label": "梓潼县",
                "pkeyid": "510700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510726",
                "label": "北川羌族自治县",
                "pkeyid": "510700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510727",
                "label": "平武县",
                "pkeyid": "510700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510781",
                "label": "江油市",
                "pkeyid": "510700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "510800",
            "label": "广元市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "510802",
                "label": "利州区",
                "pkeyid": "510800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510811",
                "label": "昭化区",
                "pkeyid": "510800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510812",
                "label": "朝天区",
                "pkeyid": "510800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510821",
                "label": "旺苍县",
                "pkeyid": "510800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510822",
                "label": "青川县",
                "pkeyid": "510800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510823",
                "label": "剑阁县",
                "pkeyid": "510800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510824",
                "label": "苍溪县",
                "pkeyid": "510800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "510900",
            "label": "遂宁市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "510903",
                "label": "船山区",
                "pkeyid": "510900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510904",
                "label": "安居区",
                "pkeyid": "510900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510921",
                "label": "蓬溪县",
                "pkeyid": "510900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510922",
                "label": "射洪县",
                "pkeyid": "510900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "510923",
                "label": "大英县",
                "pkeyid": "510900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "511000",
            "label": "内江市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "511002",
                "label": "市中区",
                "pkeyid": "511000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511011",
                "label": "东兴区",
                "pkeyid": "511000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511024",
                "label": "威远县",
                "pkeyid": "511000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511025",
                "label": "资中县",
                "pkeyid": "511000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511028",
                "label": "隆昌县",
                "pkeyid": "511000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "511100",
            "label": "乐山市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "511102",
                "label": "市中区",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511111",
                "label": "沙湾区",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511112",
                "label": "五通桥区",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511113",
                "label": "金口河区",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511123",
                "label": "犍为县",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511124",
                "label": "井研县",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511126",
                "label": "夹江县",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511129",
                "label": "沐川县",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511132",
                "label": "峨边彝族自治县",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511133",
                "label": "马边彝族自治县",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511181",
                "label": "峨眉山市",
                "pkeyid": "511100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "511300",
            "label": "南充市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "511302",
                "label": "顺庆区",
                "pkeyid": "511300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511303",
                "label": "高坪区",
                "pkeyid": "511300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511304",
                "label": "嘉陵区",
                "pkeyid": "511300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511321",
                "label": "南部县",
                "pkeyid": "511300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511322",
                "label": "营山县",
                "pkeyid": "511300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511323",
                "label": "蓬安县",
                "pkeyid": "511300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511324",
                "label": "仪陇县",
                "pkeyid": "511300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511325",
                "label": "西充县",
                "pkeyid": "511300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511381",
                "label": "阆中市",
                "pkeyid": "511300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "511400",
            "label": "眉山市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "511402",
                "label": "东坡区",
                "pkeyid": "511400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511403",
                "label": "彭山区",
                "pkeyid": "511400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511421",
                "label": "仁寿县",
                "pkeyid": "511400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511423",
                "label": "洪雅县",
                "pkeyid": "511400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511424",
                "label": "丹棱县",
                "pkeyid": "511400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511425",
                "label": "青神县",
                "pkeyid": "511400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "511500",
            "label": "宜宾市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "511502",
                "label": "翠屏区",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511503",
                "label": "南溪区",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511521",
                "label": "宜宾县",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511523",
                "label": "江安县",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511524",
                "label": "长宁县",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511525",
                "label": "高县",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511526",
                "label": "珙县",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511527",
                "label": "筠连县",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511528",
                "label": "兴文县",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511529",
                "label": "屏山县",
                "pkeyid": "511500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "511600",
            "label": "广安市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "511602",
                "label": "广安区",
                "pkeyid": "511600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511603",
                "label": "前锋区",
                "pkeyid": "511600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511621",
                "label": "岳池县",
                "pkeyid": "511600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511622",
                "label": "武胜县",
                "pkeyid": "511600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511623",
                "label": "邻水县",
                "pkeyid": "511600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511681",
                "label": "华蓥市",
                "pkeyid": "511600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "511700",
            "label": "达州市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "511702",
                "label": "通川区",
                "pkeyid": "511700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511703",
                "label": "达川区",
                "pkeyid": "511700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511722",
                "label": "宣汉县",
                "pkeyid": "511700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511723",
                "label": "开江县",
                "pkeyid": "511700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511724",
                "label": "大竹县",
                "pkeyid": "511700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511725",
                "label": "渠县",
                "pkeyid": "511700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511781",
                "label": "万源市",
                "pkeyid": "511700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "511800",
            "label": "雅安市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "511802",
                "label": "雨城区",
                "pkeyid": "511800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511803",
                "label": "名山区",
                "pkeyid": "511800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511822",
                "label": "荥经县",
                "pkeyid": "511800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511823",
                "label": "汉源县",
                "pkeyid": "511800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511824",
                "label": "石棉县",
                "pkeyid": "511800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511825",
                "label": "天全县",
                "pkeyid": "511800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511826",
                "label": "芦山县",
                "pkeyid": "511800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511827",
                "label": "宝兴县",
                "pkeyid": "511800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "511900",
            "label": "巴中市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "511902",
                "label": "巴州区",
                "pkeyid": "511900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511903",
                "label": "恩阳区",
                "pkeyid": "511900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511921",
                "label": "通江县",
                "pkeyid": "511900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511922",
                "label": "南江县",
                "pkeyid": "511900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "511923",
                "label": "平昌县",
                "pkeyid": "511900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "512000",
            "label": "资阳市",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "512002",
                "label": "雁江区",
                "pkeyid": "512000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "512021",
                "label": "安岳县",
                "pkeyid": "512000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "512022",
                "label": "乐至县",
                "pkeyid": "512000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "513200",
            "label": "阿坝藏族羌族自治州",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "513201",
                "label": "马尔康市",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513221",
                "label": "汶川县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513222",
                "label": "理县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513223",
                "label": "茂县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513224",
                "label": "松潘县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513225",
                "label": "九寨沟县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513226",
                "label": "金川县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513227",
                "label": "小金县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513228",
                "label": "黑水县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513230",
                "label": "壤塘县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513231",
                "label": "阿坝县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513232",
                "label": "若尔盖县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513233",
                "label": "红原县",
                "pkeyid": "513200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "513300",
            "label": "甘孜藏族自治州",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "513301",
                "label": "康定市",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513322",
                "label": "泸定县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513323",
                "label": "丹巴县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513324",
                "label": "九龙县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513325",
                "label": "雅江县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513326",
                "label": "道孚县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513327",
                "label": "炉霍县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513328",
                "label": "甘孜县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513329",
                "label": "新龙县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513330",
                "label": "德格县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513331",
                "label": "白玉县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513332",
                "label": "石渠县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513333",
                "label": "色达县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513334",
                "label": "理塘县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513335",
                "label": "巴塘县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513336",
                "label": "乡城县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513337",
                "label": "稻城县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513338",
                "label": "得荣县",
                "pkeyid": "513300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "513400",
            "label": "凉山彝族自治州",
            "pkeyid": "510000",
            "code": "",
            "children": [
              {
                "keyid": "513401",
                "label": "西昌市",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513422",
                "label": "木里藏族自治县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513423",
                "label": "盐源县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513424",
                "label": "德昌县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513425",
                "label": "会理县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513426",
                "label": "会东县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513427",
                "label": "宁南县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513428",
                "label": "普格县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513429",
                "label": "布拖县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513430",
                "label": "金阳县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513431",
                "label": "昭觉县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513432",
                "label": "喜德县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513433",
                "label": "冕宁县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513434",
                "label": "越西县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513435",
                "label": "甘洛县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513436",
                "label": "美姑县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "513437",
                "label": "雷波县",
                "pkeyid": "513400",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "520000",
        "label": "贵州省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "520100",
            "label": "贵阳市",
            "pkeyid": "520000",
            "code": "",
            "children": [
              {
                "keyid": "520102",
                "label": "南明区",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520103",
                "label": "云岩区",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520111",
                "label": "花溪区",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520112",
                "label": "乌当区",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520113",
                "label": "白云区",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520115",
                "label": "观山湖区",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520121",
                "label": "开阳县",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520122",
                "label": "息烽县",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520123",
                "label": "修文县",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520181",
                "label": "清镇市",
                "pkeyid": "520100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "520200",
            "label": "六盘水市",
            "pkeyid": "520000",
            "code": "",
            "children": [
              {
                "keyid": "520201",
                "label": "钟山区",
                "pkeyid": "520200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520203",
                "label": "六枝特区",
                "pkeyid": "520200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520221",
                "label": "水城县",
                "pkeyid": "520200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520222",
                "label": "盘县",
                "pkeyid": "520200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "520300",
            "label": "遵义市",
            "pkeyid": "520000",
            "code": "",
            "children": [
              {
                "keyid": "520302",
                "label": "红花岗区",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520303",
                "label": "汇川区",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520304",
                "label": "播州区",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520322",
                "label": "桐梓县",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520323",
                "label": "绥阳县",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520324",
                "label": "正安县",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520325",
                "label": "道真仡佬族苗族自治县",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520326",
                "label": "务川仡佬族苗族自治县",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520327",
                "label": "凤冈县",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520328",
                "label": "湄潭县",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520329",
                "label": "余庆县",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520330",
                "label": "习水县",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520381",
                "label": "赤水市",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520382",
                "label": "仁怀市",
                "pkeyid": "520300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "520400",
            "label": "安顺市",
            "pkeyid": "520000",
            "code": "",
            "children": [
              {
                "keyid": "520402",
                "label": "西秀区",
                "pkeyid": "520400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520403",
                "label": "平坝区",
                "pkeyid": "520400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520422",
                "label": "普定县",
                "pkeyid": "520400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520423",
                "label": "镇宁布依族苗族自治县",
                "pkeyid": "520400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520424",
                "label": "关岭布依族苗族自治县",
                "pkeyid": "520400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520425",
                "label": "紫云苗族布依族自治县",
                "pkeyid": "520400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "520500",
            "label": "毕节市",
            "pkeyid": "520000",
            "code": "",
            "children": [
              {
                "keyid": "520502",
                "label": "七星关区",
                "pkeyid": "520500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520521",
                "label": "大方县",
                "pkeyid": "520500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520522",
                "label": "黔西县",
                "pkeyid": "520500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520523",
                "label": "金沙县",
                "pkeyid": "520500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520524",
                "label": "织金县",
                "pkeyid": "520500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520525",
                "label": "纳雍县",
                "pkeyid": "520500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520526",
                "label": "威宁彝族回族苗族自治县",
                "pkeyid": "520500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520527",
                "label": "赫章县",
                "pkeyid": "520500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "520600",
            "label": "铜仁市",
            "pkeyid": "520000",
            "code": "",
            "children": [
              {
                "keyid": "520602",
                "label": "碧江区",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520603",
                "label": "万山区",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520621",
                "label": "江口县",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520622",
                "label": "玉屏侗族自治县",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520623",
                "label": "石阡县",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520624",
                "label": "思南县",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520625",
                "label": "印江土家族苗族自治县",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520626",
                "label": "德江县",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520627",
                "label": "沿河土家族自治县",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "520628",
                "label": "松桃苗族自治县",
                "pkeyid": "520600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "522300",
            "label": "黔西南布依族苗族自治州",
            "pkeyid": "520000",
            "code": "",
            "children": [
              {
                "keyid": "522301",
                "label": "兴义市",
                "pkeyid": "522300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522322",
                "label": "兴仁县",
                "pkeyid": "522300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522323",
                "label": "普安县",
                "pkeyid": "522300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522324",
                "label": "晴隆县",
                "pkeyid": "522300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522325",
                "label": "贞丰县",
                "pkeyid": "522300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522326",
                "label": "望谟县",
                "pkeyid": "522300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522327",
                "label": "册亨县",
                "pkeyid": "522300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522328",
                "label": "安龙县",
                "pkeyid": "522300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "522600",
            "label": "黔东南苗族侗族自治州",
            "pkeyid": "520000",
            "code": "",
            "children": [
              {
                "keyid": "522601",
                "label": "凯里市",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522622",
                "label": "黄平县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522623",
                "label": "施秉县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522624",
                "label": "三穗县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522625",
                "label": "镇远县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522626",
                "label": "岑巩县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522627",
                "label": "天柱县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522628",
                "label": "锦屏县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522629",
                "label": "剑河县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522630",
                "label": "台江县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522631",
                "label": "黎平县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522632",
                "label": "榕江县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522633",
                "label": "从江县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522634",
                "label": "雷山县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522635",
                "label": "麻江县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522636",
                "label": "丹寨县",
                "pkeyid": "522600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "522700",
            "label": "黔南布依族苗族自治州",
            "pkeyid": "520000",
            "code": "",
            "children": [
              {
                "keyid": "522701",
                "label": "都匀市",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522702",
                "label": "福泉市",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522722",
                "label": "荔波县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522723",
                "label": "贵定县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522725",
                "label": "瓮安县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522726",
                "label": "独山县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522727",
                "label": "平塘县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522728",
                "label": "罗甸县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522729",
                "label": "长顺县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522730",
                "label": "龙里县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522731",
                "label": "惠水县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "522732",
                "label": "三都水族自治县",
                "pkeyid": "522700",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "530000",
        "label": "云南省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "530100",
            "label": "昆明市",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "530102",
                "label": "五华区",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530103",
                "label": "盘龙区",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530111",
                "label": "官渡区",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530112",
                "label": "西山区",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530113",
                "label": "东川区",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530114",
                "label": "呈贡区",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530122",
                "label": "晋宁县",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530124",
                "label": "富民县",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530125",
                "label": "宜良县",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530126",
                "label": "石林彝族自治县",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530127",
                "label": "嵩明县",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530128",
                "label": "禄劝彝族苗族自治县",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530129",
                "label": "寻甸回族彝族自治县",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530181",
                "label": "安宁市",
                "pkeyid": "530100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "530300",
            "label": "曲靖市",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "530302",
                "label": "麒麟区",
                "pkeyid": "530300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530303",
                "label": "沾益区",
                "pkeyid": "530300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530321",
                "label": "马龙县",
                "pkeyid": "530300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530322",
                "label": "陆良县",
                "pkeyid": "530300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530323",
                "label": "师宗县",
                "pkeyid": "530300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530324",
                "label": "罗平县",
                "pkeyid": "530300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530325",
                "label": "富源县",
                "pkeyid": "530300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530326",
                "label": "会泽县",
                "pkeyid": "530300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530381",
                "label": "宣威市",
                "pkeyid": "530300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "530400",
            "label": "玉溪市",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "530402",
                "label": "红塔区",
                "pkeyid": "530400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530403",
                "label": "江川区",
                "pkeyid": "530400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530422",
                "label": "澄江县",
                "pkeyid": "530400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530423",
                "label": "通海县",
                "pkeyid": "530400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530424",
                "label": "华宁县",
                "pkeyid": "530400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530425",
                "label": "易门县",
                "pkeyid": "530400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530426",
                "label": "峨山彝族自治县",
                "pkeyid": "530400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530427",
                "label": "新平彝族傣族自治县",
                "pkeyid": "530400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530428",
                "label": "元江哈尼族彝族傣族自治县",
                "pkeyid": "530400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "530500",
            "label": "保山市",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "530502",
                "label": "隆阳区",
                "pkeyid": "530500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530521",
                "label": "施甸县",
                "pkeyid": "530500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530523",
                "label": "龙陵县",
                "pkeyid": "530500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530524",
                "label": "昌宁县",
                "pkeyid": "530500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530581",
                "label": "腾冲市",
                "pkeyid": "530500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "530600",
            "label": "昭通市",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "530602",
                "label": "昭阳区",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530621",
                "label": "鲁甸县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530622",
                "label": "巧家县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530623",
                "label": "盐津县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530624",
                "label": "大关县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530625",
                "label": "永善县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530626",
                "label": "绥江县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530627",
                "label": "镇雄县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530628",
                "label": "彝良县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530629",
                "label": "威信县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530630",
                "label": "水富县",
                "pkeyid": "530600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "530700",
            "label": "丽江市",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "530702",
                "label": "古城区",
                "pkeyid": "530700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530721",
                "label": "玉龙纳西族自治县",
                "pkeyid": "530700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530722",
                "label": "永胜县",
                "pkeyid": "530700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530723",
                "label": "华坪县",
                "pkeyid": "530700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530724",
                "label": "宁蒗彝族自治县",
                "pkeyid": "530700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "530800",
            "label": "普洱市",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "530802",
                "label": "思茅区",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530821",
                "label": "宁洱哈尼族彝族自治县",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530822",
                "label": "墨江哈尼族自治县",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530823",
                "label": "景东彝族自治县",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530824",
                "label": "景谷傣族彝族自治县",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530825",
                "label": "镇沅彝族哈尼族拉祜族自治县",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530826",
                "label": "江城哈尼族彝族自治县",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530827",
                "label": "孟连傣族拉祜族佤族自治县",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530828",
                "label": "澜沧拉祜族自治县",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530829",
                "label": "西盟佤族自治县",
                "pkeyid": "530800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "530900",
            "label": "临沧市",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "530902",
                "label": "临翔区",
                "pkeyid": "530900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530921",
                "label": "凤庆县",
                "pkeyid": "530900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530922",
                "label": "云县",
                "pkeyid": "530900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530923",
                "label": "永德县",
                "pkeyid": "530900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530924",
                "label": "镇康县",
                "pkeyid": "530900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530925",
                "label": "双江拉祜族佤族布朗族傣族自治县",
                "pkeyid": "530900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530926",
                "label": "耿马傣族佤族自治县",
                "pkeyid": "530900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "530927",
                "label": "沧源佤族自治县",
                "pkeyid": "530900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "532300",
            "label": "楚雄彝族自治州",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "532301",
                "label": "楚雄市",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532322",
                "label": "双柏县",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532323",
                "label": "牟定县",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532324",
                "label": "南华县",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532325",
                "label": "姚安县",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532326",
                "label": "大姚县",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532327",
                "label": "永仁县",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532328",
                "label": "元谋县",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532329",
                "label": "武定县",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532331",
                "label": "禄丰县",
                "pkeyid": "532300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "532500",
            "label": "红河哈尼族彝族自治州",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "532501",
                "label": "个旧市",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532502",
                "label": "开远市",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532503",
                "label": "蒙自市",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532504",
                "label": "弥勒市",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532523",
                "label": "屏边苗族自治县",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532524",
                "label": "建水县",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532525",
                "label": "石屏县",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532527",
                "label": "泸西县",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532528",
                "label": "元阳县",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532529",
                "label": "红河县",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532530",
                "label": "金平苗族瑶族傣族自治县",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532531",
                "label": "绿春县",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532532",
                "label": "河口瑶族自治县",
                "pkeyid": "532500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "532600",
            "label": "文山壮族苗族自治州",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "532601",
                "label": "文山市",
                "pkeyid": "532600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532622",
                "label": "砚山县",
                "pkeyid": "532600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532623",
                "label": "西畴县",
                "pkeyid": "532600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532624",
                "label": "麻栗坡县",
                "pkeyid": "532600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532625",
                "label": "马关县",
                "pkeyid": "532600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532626",
                "label": "丘北县",
                "pkeyid": "532600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532627",
                "label": "广南县",
                "pkeyid": "532600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532628",
                "label": "富宁县",
                "pkeyid": "532600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "532800",
            "label": "西双版纳傣族自治州",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "532801",
                "label": "景洪市",
                "pkeyid": "532800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532822",
                "label": "勐海县",
                "pkeyid": "532800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532823",
                "label": "勐腊县",
                "pkeyid": "532800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "532900",
            "label": "大理白族自治州",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "532901",
                "label": "大理市",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532922",
                "label": "漾濞彝族自治县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532923",
                "label": "祥云县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532924",
                "label": "宾川县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532925",
                "label": "弥渡县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532926",
                "label": "南涧彝族自治县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532927",
                "label": "巍山彝族回族自治县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532928",
                "label": "永平县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532929",
                "label": "云龙县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532930",
                "label": "洱源县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532931",
                "label": "剑川县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "532932",
                "label": "鹤庆县",
                "pkeyid": "532900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "533100",
            "label": "德宏傣族景颇族自治州",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "533102",
                "label": "瑞丽市",
                "pkeyid": "533100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "533103",
                "label": "芒市",
                "pkeyid": "533100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "533122",
                "label": "梁河县",
                "pkeyid": "533100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "533123",
                "label": "盈江县",
                "pkeyid": "533100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "533124",
                "label": "陇川县",
                "pkeyid": "533100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "533300",
            "label": "怒江傈僳族自治州",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "533301",
                "label": "泸水市",
                "pkeyid": "533300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "533323",
                "label": "福贡县",
                "pkeyid": "533300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "533324",
                "label": "贡山独龙族怒族自治县",
                "pkeyid": "533300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "533325",
                "label": "兰坪白族普米族自治县",
                "pkeyid": "533300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "533400",
            "label": "迪庆藏族自治州",
            "pkeyid": "530000",
            "code": "",
            "children": [
              {
                "keyid": "533401",
                "label": "香格里拉市",
                "pkeyid": "533400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "533422",
                "label": "德钦县",
                "pkeyid": "533400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "533423",
                "label": "维西傈僳族自治县",
                "pkeyid": "533400",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "540000",
        "label": "西藏自治区",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "540100",
            "label": "拉萨市",
            "pkeyid": "540000",
            "code": "",
            "children": [
              {
                "keyid": "540102",
                "label": "城关区",
                "pkeyid": "540100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540103",
                "label": "堆龙德庆区",
                "pkeyid": "540100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540121",
                "label": "林周县",
                "pkeyid": "540100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540122",
                "label": "当雄县",
                "pkeyid": "540100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540123",
                "label": "尼木县",
                "pkeyid": "540100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540124",
                "label": "曲水县",
                "pkeyid": "540100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540126",
                "label": "达孜县",
                "pkeyid": "540100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540127",
                "label": "墨竹工卡县",
                "pkeyid": "540100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "540200",
            "label": "日喀则市",
            "pkeyid": "540000",
            "code": "",
            "children": [
              {
                "keyid": "540202",
                "label": "桑珠孜区",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540221",
                "label": "南木林县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540222",
                "label": "江孜县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540223",
                "label": "定日县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540224",
                "label": "萨迦县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540225",
                "label": "拉孜县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540226",
                "label": "昂仁县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540227",
                "label": "谢通门县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540228",
                "label": "白朗县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540229",
                "label": "仁布县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540230",
                "label": "康马县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540231",
                "label": "定结县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540232",
                "label": "仲巴县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540233",
                "label": "亚东县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540234",
                "label": "吉隆县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540235",
                "label": "聂拉木县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540236",
                "label": "萨嘎县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540237",
                "label": "岗巴县",
                "pkeyid": "540200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "540300",
            "label": "昌都市",
            "pkeyid": "540000",
            "code": "",
            "children": [
              {
                "keyid": "540302",
                "label": "卡若区",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540321",
                "label": "江达县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540322",
                "label": "贡觉县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540323",
                "label": "类乌齐县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540324",
                "label": "丁青县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540325",
                "label": "察雅县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540326",
                "label": "八宿县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540327",
                "label": "左贡县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540328",
                "label": "芒康县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540329",
                "label": "洛隆县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540330",
                "label": "边坝县",
                "pkeyid": "540300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "540400",
            "label": "林芝市",
            "pkeyid": "540000",
            "code": "",
            "children": [
              {
                "keyid": "540402",
                "label": "巴宜区",
                "pkeyid": "540400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540421",
                "label": "工布江达县",
                "pkeyid": "540400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540422",
                "label": "米林县",
                "pkeyid": "540400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540423",
                "label": "墨脱县",
                "pkeyid": "540400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540424",
                "label": "波密县",
                "pkeyid": "540400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540425",
                "label": "察隅县",
                "pkeyid": "540400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540426",
                "label": "朗县",
                "pkeyid": "540400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "540500",
            "label": "山南市",
            "pkeyid": "540000",
            "code": "",
            "children": [
              {
                "keyid": "540502",
                "label": "乃东区",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540521",
                "label": "扎囊县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540522",
                "label": "贡嘎县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540523",
                "label": "桑日县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540524",
                "label": "琼结县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540525",
                "label": "曲松县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540526",
                "label": "措美县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540527",
                "label": "洛扎县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540528",
                "label": "加查县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540529",
                "label": "隆子县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540530",
                "label": "错那县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "540531",
                "label": "浪卡子县",
                "pkeyid": "540500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "542400",
            "label": "那曲地区",
            "pkeyid": "540000",
            "code": "",
            "children": [
              {
                "keyid": "542421",
                "label": "那曲县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542422",
                "label": "嘉黎县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542423",
                "label": "比如县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542424",
                "label": "聂荣县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542425",
                "label": "安多县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542426",
                "label": "申扎县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542427",
                "label": "索县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542428",
                "label": "班戈县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542429",
                "label": "巴青县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542430",
                "label": "尼玛县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542431",
                "label": "双湖县",
                "pkeyid": "542400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "542500",
            "label": "阿里地区",
            "pkeyid": "540000",
            "code": "",
            "children": [
              {
                "keyid": "542521",
                "label": "普兰县",
                "pkeyid": "542500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542522",
                "label": "札达县",
                "pkeyid": "542500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542523",
                "label": "噶尔县",
                "pkeyid": "542500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542524",
                "label": "日土县",
                "pkeyid": "542500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542525",
                "label": "革吉县",
                "pkeyid": "542500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542526",
                "label": "改则县",
                "pkeyid": "542500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "542527",
                "label": "措勤县",
                "pkeyid": "542500",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "610000",
        "label": "陕西省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "610100",
            "label": "西安市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "610102",
                "label": "新城区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610103",
                "label": "碑林区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610104",
                "label": "莲湖区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610111",
                "label": "灞桥区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610112",
                "label": "未央区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610113",
                "label": "雁塔区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610114",
                "label": "阎良区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610115",
                "label": "临潼区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610116",
                "label": "长安区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610117",
                "label": "高陵区",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610122",
                "label": "蓝田县",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610124",
                "label": "周至县",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610125",
                "label": "户县",
                "pkeyid": "610100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "610200",
            "label": "铜川市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "610202",
                "label": "王益区",
                "pkeyid": "610200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610203",
                "label": "印台区",
                "pkeyid": "610200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610204",
                "label": "耀州区",
                "pkeyid": "610200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610222",
                "label": "宜君县",
                "pkeyid": "610200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "610300",
            "label": "宝鸡市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "610302",
                "label": "渭滨区",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610303",
                "label": "金台区",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610304",
                "label": "陈仓区",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610322",
                "label": "凤翔县",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610323",
                "label": "岐山县",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610324",
                "label": "扶风县",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610326",
                "label": "眉县",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610327",
                "label": "陇县",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610328",
                "label": "千阳县",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610329",
                "label": "麟游县",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610330",
                "label": "凤县",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610331",
                "label": "太白县",
                "pkeyid": "610300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "610400",
            "label": "咸阳市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "610402",
                "label": "秦都区",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610403",
                "label": "杨陵区",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610404",
                "label": "渭城区",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610422",
                "label": "三原县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610423",
                "label": "泾阳县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610424",
                "label": "乾县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610425",
                "label": "礼泉县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610426",
                "label": "永寿县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610427",
                "label": "彬县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610428",
                "label": "长武县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610429",
                "label": "旬邑县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610430",
                "label": "淳化县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610431",
                "label": "武功县",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610481",
                "label": "兴平市",
                "pkeyid": "610400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "610500",
            "label": "渭南市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "610502",
                "label": "临渭区",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610503",
                "label": "华州区",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610522",
                "label": "潼关县",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610523",
                "label": "大荔县",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610524",
                "label": "合阳县",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610525",
                "label": "澄城县",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610526",
                "label": "蒲城县",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610527",
                "label": "白水县",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610528",
                "label": "富平县",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610581",
                "label": "韩城市",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610582",
                "label": "华阴市",
                "pkeyid": "610500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "610600",
            "label": "延安市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "610602",
                "label": "宝塔区",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610603",
                "label": "安塞区",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610621",
                "label": "延长县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610622",
                "label": "延川县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610623",
                "label": "子长县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610625",
                "label": "志丹县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610626",
                "label": "吴起县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610627",
                "label": "甘泉县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610628",
                "label": "富县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610629",
                "label": "洛川县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610630",
                "label": "宜川县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610631",
                "label": "黄龙县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610632",
                "label": "黄陵县",
                "pkeyid": "610600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "610700",
            "label": "汉中市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "610702",
                "label": "汉台区",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610721",
                "label": "南郑县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610722",
                "label": "城固县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610723",
                "label": "洋县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610724",
                "label": "西乡县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610725",
                "label": "勉县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610726",
                "label": "宁强县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610727",
                "label": "略阳县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610728",
                "label": "镇巴县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610729",
                "label": "留坝县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610730",
                "label": "佛坪县",
                "pkeyid": "610700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "610800",
            "label": "榆林市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "610802",
                "label": "榆阳区",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610803",
                "label": "横山区",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610821",
                "label": "神木县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610822",
                "label": "府谷县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610824",
                "label": "靖边县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610825",
                "label": "定边县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610826",
                "label": "绥德县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610827",
                "label": "米脂县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610828",
                "label": "佳县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610829",
                "label": "吴堡县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610830",
                "label": "清涧县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610831",
                "label": "子洲县",
                "pkeyid": "610800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "610900",
            "label": "安康市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "610902",
                "label": "汉滨区",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610921",
                "label": "汉阴县",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610922",
                "label": "石泉县",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610923",
                "label": "宁陕县",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610924",
                "label": "紫阳县",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610925",
                "label": "岚皋县",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610926",
                "label": "平利县",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610927",
                "label": "镇坪县",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610928",
                "label": "旬阳县",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "610929",
                "label": "白河县",
                "pkeyid": "610900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "611000",
            "label": "商洛市",
            "pkeyid": "610000",
            "code": "",
            "children": [
              {
                "keyid": "611002",
                "label": "商州区",
                "pkeyid": "611000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "611021",
                "label": "洛南县",
                "pkeyid": "611000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "611022",
                "label": "丹凤县",
                "pkeyid": "611000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "611023",
                "label": "商南县",
                "pkeyid": "611000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "611024",
                "label": "山阳县",
                "pkeyid": "611000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "611025",
                "label": "镇安县",
                "pkeyid": "611000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "611026",
                "label": "柞水县",
                "pkeyid": "611000",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "620000",
        "label": "甘肃省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "620100",
            "label": "兰州市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "620102",
                "label": "城关区",
                "pkeyid": "620100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620103",
                "label": "七里河区",
                "pkeyid": "620100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620104",
                "label": "西固区",
                "pkeyid": "620100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620105",
                "label": "安宁区",
                "pkeyid": "620100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620111",
                "label": "红古区",
                "pkeyid": "620100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620121",
                "label": "永登县",
                "pkeyid": "620100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620122",
                "label": "皋兰县",
                "pkeyid": "620100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620123",
                "label": "榆中县",
                "pkeyid": "620100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "620200",
            "label": "嘉峪关市",
            "pkeyid": "620000",
            "code": "",
            "children": ""
          },
          {
            "keyid": "620300",
            "label": "金昌市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "620302",
                "label": "金川区",
                "pkeyid": "620300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620321",
                "label": "永昌县",
                "pkeyid": "620300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "620400",
            "label": "白银市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "620402",
                "label": "白银区",
                "pkeyid": "620400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620403",
                "label": "平川区",
                "pkeyid": "620400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620421",
                "label": "靖远县",
                "pkeyid": "620400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620422",
                "label": "会宁县",
                "pkeyid": "620400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620423",
                "label": "景泰县",
                "pkeyid": "620400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "620500",
            "label": "天水市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "620502",
                "label": "秦州区",
                "pkeyid": "620500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620503",
                "label": "麦积区",
                "pkeyid": "620500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620521",
                "label": "清水县",
                "pkeyid": "620500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620522",
                "label": "秦安县",
                "pkeyid": "620500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620523",
                "label": "甘谷县",
                "pkeyid": "620500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620524",
                "label": "武山县",
                "pkeyid": "620500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620525",
                "label": "张家川回族自治县",
                "pkeyid": "620500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "620600",
            "label": "武威市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "620602",
                "label": "凉州区",
                "pkeyid": "620600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620621",
                "label": "民勤县",
                "pkeyid": "620600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620622",
                "label": "古浪县",
                "pkeyid": "620600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620623",
                "label": "天祝藏族自治县",
                "pkeyid": "620600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "620700",
            "label": "张掖市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "620702",
                "label": "甘州区",
                "pkeyid": "620700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620721",
                "label": "肃南裕固族自治县",
                "pkeyid": "620700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620722",
                "label": "民乐县",
                "pkeyid": "620700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620723",
                "label": "临泽县",
                "pkeyid": "620700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620724",
                "label": "高台县",
                "pkeyid": "620700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620725",
                "label": "山丹县",
                "pkeyid": "620700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "620800",
            "label": "平凉市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "620802",
                "label": "崆峒区",
                "pkeyid": "620800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620821",
                "label": "泾川县",
                "pkeyid": "620800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620822",
                "label": "灵台县",
                "pkeyid": "620800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620823",
                "label": "崇信县",
                "pkeyid": "620800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620824",
                "label": "华亭县",
                "pkeyid": "620800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620825",
                "label": "庄浪县",
                "pkeyid": "620800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620826",
                "label": "静宁县",
                "pkeyid": "620800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "620900",
            "label": "酒泉市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "620902",
                "label": "肃州区",
                "pkeyid": "620900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620921",
                "label": "金塔县",
                "pkeyid": "620900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620922",
                "label": "瓜州县",
                "pkeyid": "620900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620923",
                "label": "肃北蒙古族自治县",
                "pkeyid": "620900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620924",
                "label": "阿克塞哈萨克族自治县",
                "pkeyid": "620900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620981",
                "label": "玉门市",
                "pkeyid": "620900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "620982",
                "label": "敦煌市",
                "pkeyid": "620900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "621000",
            "label": "庆阳市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "621002",
                "label": "西峰区",
                "pkeyid": "621000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621021",
                "label": "庆城县",
                "pkeyid": "621000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621022",
                "label": "环县",
                "pkeyid": "621000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621023",
                "label": "华池县",
                "pkeyid": "621000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621024",
                "label": "合水县",
                "pkeyid": "621000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621025",
                "label": "正宁县",
                "pkeyid": "621000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621026",
                "label": "宁县",
                "pkeyid": "621000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621027",
                "label": "镇原县",
                "pkeyid": "621000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "621100",
            "label": "定西市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "621102",
                "label": "安定区",
                "pkeyid": "621100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621121",
                "label": "通渭县",
                "pkeyid": "621100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621122",
                "label": "陇西县",
                "pkeyid": "621100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621123",
                "label": "渭源县",
                "pkeyid": "621100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621124",
                "label": "临洮县",
                "pkeyid": "621100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621125",
                "label": "漳县",
                "pkeyid": "621100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621126",
                "label": "岷县",
                "pkeyid": "621100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "621200",
            "label": "陇南市",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "621202",
                "label": "武都区",
                "pkeyid": "621200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621221",
                "label": "成县",
                "pkeyid": "621200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621222",
                "label": "文县",
                "pkeyid": "621200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621223",
                "label": "宕昌县",
                "pkeyid": "621200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621224",
                "label": "康县",
                "pkeyid": "621200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621225",
                "label": "西和县",
                "pkeyid": "621200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621226",
                "label": "礼县",
                "pkeyid": "621200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621227",
                "label": "徽县",
                "pkeyid": "621200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "621228",
                "label": "两当县",
                "pkeyid": "621200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "622900",
            "label": "临夏回族自治州",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "622901",
                "label": "临夏市",
                "pkeyid": "622900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "622921",
                "label": "临夏县",
                "pkeyid": "622900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "622922",
                "label": "康乐县",
                "pkeyid": "622900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "622923",
                "label": "永靖县",
                "pkeyid": "622900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "622924",
                "label": "广河县",
                "pkeyid": "622900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "622925",
                "label": "和政县",
                "pkeyid": "622900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "622926",
                "label": "东乡族自治县",
                "pkeyid": "622900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "622927",
                "label": "积石山保安族东乡族撒拉族自治县",
                "pkeyid": "622900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "623000",
            "label": "甘南藏族自治州",
            "pkeyid": "620000",
            "code": "",
            "children": [
              {
                "keyid": "623001",
                "label": "合作市",
                "pkeyid": "623000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "623021",
                "label": "临潭县",
                "pkeyid": "623000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "623022",
                "label": "卓尼县",
                "pkeyid": "623000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "623023",
                "label": "舟曲县",
                "pkeyid": "623000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "623024",
                "label": "迭部县",
                "pkeyid": "623000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "623025",
                "label": "玛曲县",
                "pkeyid": "623000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "623026",
                "label": "碌曲县",
                "pkeyid": "623000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "623027",
                "label": "夏河县",
                "pkeyid": "623000",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "630000",
        "label": "青海省",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "630100",
            "label": "西宁市",
            "pkeyid": "630000",
            "code": "",
            "children": [
              {
                "keyid": "630102",
                "label": "城东区",
                "pkeyid": "630100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630103",
                "label": "城中区",
                "pkeyid": "630100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630104",
                "label": "城西区",
                "pkeyid": "630100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630105",
                "label": "城北区",
                "pkeyid": "630100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630121",
                "label": "大通回族土族自治县",
                "pkeyid": "630100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630122",
                "label": "湟中县",
                "pkeyid": "630100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630123",
                "label": "湟源县",
                "pkeyid": "630100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "630200",
            "label": "海东市",
            "pkeyid": "630000",
            "code": "",
            "children": [
              {
                "keyid": "630202",
                "label": "乐都区",
                "pkeyid": "630200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630203",
                "label": "平安区",
                "pkeyid": "630200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630222",
                "label": "民和回族土族自治县",
                "pkeyid": "630200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630223",
                "label": "互助土族自治县",
                "pkeyid": "630200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630224",
                "label": "化隆回族自治县",
                "pkeyid": "630200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "630225",
                "label": "循化撒拉族自治县",
                "pkeyid": "630200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "632200",
            "label": "海北藏族自治州",
            "pkeyid": "630000",
            "code": "",
            "children": [
              {
                "keyid": "632221",
                "label": "门源回族自治县",
                "pkeyid": "632200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632222",
                "label": "祁连县",
                "pkeyid": "632200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632223",
                "label": "海晏县",
                "pkeyid": "632200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632224",
                "label": "刚察县",
                "pkeyid": "632200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "632300",
            "label": "黄南藏族自治州",
            "pkeyid": "630000",
            "code": "",
            "children": [
              {
                "keyid": "632321",
                "label": "同仁县",
                "pkeyid": "632300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632322",
                "label": "尖扎县",
                "pkeyid": "632300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632323",
                "label": "泽库县",
                "pkeyid": "632300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632324",
                "label": "河南蒙古族自治县",
                "pkeyid": "632300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "632500",
            "label": "海南藏族自治州",
            "pkeyid": "630000",
            "code": "",
            "children": [
              {
                "keyid": "632521",
                "label": "共和县",
                "pkeyid": "632500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632522",
                "label": "同德县",
                "pkeyid": "632500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632523",
                "label": "贵德县",
                "pkeyid": "632500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632524",
                "label": "兴海县",
                "pkeyid": "632500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632525",
                "label": "贵南县",
                "pkeyid": "632500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "632600",
            "label": "果洛藏族自治州",
            "pkeyid": "630000",
            "code": "",
            "children": [
              {
                "keyid": "632621",
                "label": "玛沁县",
                "pkeyid": "632600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632622",
                "label": "班玛县",
                "pkeyid": "632600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632623",
                "label": "甘德县",
                "pkeyid": "632600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632624",
                "label": "达日县",
                "pkeyid": "632600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632625",
                "label": "久治县",
                "pkeyid": "632600",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632626",
                "label": "玛多县",
                "pkeyid": "632600",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "632700",
            "label": "玉树藏族自治州",
            "pkeyid": "630000",
            "code": "",
            "children": [
              {
                "keyid": "632701",
                "label": "玉树市",
                "pkeyid": "632700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632722",
                "label": "杂多县",
                "pkeyid": "632700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632723",
                "label": "称多县",
                "pkeyid": "632700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632724",
                "label": "治多县",
                "pkeyid": "632700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632725",
                "label": "囊谦县",
                "pkeyid": "632700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632726",
                "label": "曲麻莱县",
                "pkeyid": "632700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "632800",
            "label": "海西蒙古族藏族自治州",
            "pkeyid": "630000",
            "code": "",
            "children": [
              {
                "keyid": "632801",
                "label": "格尔木市",
                "pkeyid": "632800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632802",
                "label": "德令哈市",
                "pkeyid": "632800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632821",
                "label": "乌兰县",
                "pkeyid": "632800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632822",
                "label": "都兰县",
                "pkeyid": "632800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "632823",
                "label": "天峻县",
                "pkeyid": "632800",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "640000",
        "label": "宁夏回族自治区",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "640100",
            "label": "银川市",
            "pkeyid": "640000",
            "code": "",
            "children": [
              {
                "keyid": "640104",
                "label": "兴庆区",
                "pkeyid": "640100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640105",
                "label": "西夏区",
                "pkeyid": "640100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640106",
                "label": "金凤区",
                "pkeyid": "640100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640121",
                "label": "永宁县",
                "pkeyid": "640100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640122",
                "label": "贺兰县",
                "pkeyid": "640100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640181",
                "label": "灵武市",
                "pkeyid": "640100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "640200",
            "label": "石嘴山市",
            "pkeyid": "640000",
            "code": "",
            "children": [
              {
                "keyid": "640202",
                "label": "大武口区",
                "pkeyid": "640200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640205",
                "label": "惠农区",
                "pkeyid": "640200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640221",
                "label": "平罗县",
                "pkeyid": "640200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "640300",
            "label": "吴忠市",
            "pkeyid": "640000",
            "code": "",
            "children": [
              {
                "keyid": "640302",
                "label": "利通区",
                "pkeyid": "640300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640303",
                "label": "红寺堡区",
                "pkeyid": "640300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640323",
                "label": "盐池县",
                "pkeyid": "640300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640324",
                "label": "同心县",
                "pkeyid": "640300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640381",
                "label": "青铜峡市",
                "pkeyid": "640300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "640400",
            "label": "固原市",
            "pkeyid": "640000",
            "code": "",
            "children": [
              {
                "keyid": "640402",
                "label": "原州区",
                "pkeyid": "640400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640422",
                "label": "西吉县",
                "pkeyid": "640400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640423",
                "label": "隆德县",
                "pkeyid": "640400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640424",
                "label": "泾源县",
                "pkeyid": "640400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640425",
                "label": "彭阳县",
                "pkeyid": "640400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "640500",
            "label": "中卫市",
            "pkeyid": "640000",
            "code": "",
            "children": [
              {
                "keyid": "640502",
                "label": "沙坡头区",
                "pkeyid": "640500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640521",
                "label": "中宁县",
                "pkeyid": "640500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "640522",
                "label": "海原县",
                "pkeyid": "640500",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "650000",
        "label": "新疆维吾尔自治区",
        "pkeyid": "0000",
        "code": "",
        "children": [
          {
            "keyid": "650100",
            "label": "乌鲁木齐市",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "650102",
                "label": "天山区",
                "pkeyid": "650100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650103",
                "label": "沙依巴克区",
                "pkeyid": "650100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650104",
                "label": "新市区",
                "pkeyid": "650100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650105",
                "label": "水磨沟区",
                "pkeyid": "650100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650106",
                "label": "头屯河区",
                "pkeyid": "650100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650107",
                "label": "达坂城区",
                "pkeyid": "650100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650109",
                "label": "米东区",
                "pkeyid": "650100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650121",
                "label": "乌鲁木齐县",
                "pkeyid": "650100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "650200",
            "label": "克拉玛依市",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "650202",
                "label": "独山子区",
                "pkeyid": "650200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650203",
                "label": "克拉玛依区",
                "pkeyid": "650200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650204",
                "label": "白碱滩区",
                "pkeyid": "650200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650205",
                "label": "乌尔禾区",
                "pkeyid": "650200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "650400",
            "label": "吐鲁番市",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "650402",
                "label": "高昌区",
                "pkeyid": "650400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650421",
                "label": "鄯善县",
                "pkeyid": "650400",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650422",
                "label": "托克逊县",
                "pkeyid": "650400",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "650500",
            "label": "哈密市",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "650502",
                "label": "伊州区",
                "pkeyid": "650500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650521",
                "label": "巴里坤哈萨克自治县",
                "pkeyid": "650500",
                "code": "",
                "children": ""
              },
              {
                "keyid": "650522",
                "label": "伊吾县",
                "pkeyid": "650500",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "652300",
            "label": "昌吉回族自治州",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "652301",
                "label": "昌吉市",
                "pkeyid": "652300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652302",
                "label": "阜康市",
                "pkeyid": "652300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652323",
                "label": "呼图壁县",
                "pkeyid": "652300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652324",
                "label": "玛纳斯县",
                "pkeyid": "652300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652325",
                "label": "奇台县",
                "pkeyid": "652300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652327",
                "label": "吉木萨尔县",
                "pkeyid": "652300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652328",
                "label": "木垒哈萨克自治县",
                "pkeyid": "652300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "652700",
            "label": "博尔塔拉蒙古自治州",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "652701",
                "label": "博乐市",
                "pkeyid": "652700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652702",
                "label": "阿拉山口市",
                "pkeyid": "652700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652722",
                "label": "精河县",
                "pkeyid": "652700",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652723",
                "label": "温泉县",
                "pkeyid": "652700",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "652800",
            "label": "巴音郭楞蒙古自治州",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "652801",
                "label": "库尔勒市",
                "pkeyid": "652800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652822",
                "label": "轮台县",
                "pkeyid": "652800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652823",
                "label": "尉犁县",
                "pkeyid": "652800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652824",
                "label": "若羌县",
                "pkeyid": "652800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652825",
                "label": "且末县",
                "pkeyid": "652800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652826",
                "label": "焉耆回族自治县",
                "pkeyid": "652800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652827",
                "label": "和静县",
                "pkeyid": "652800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652828",
                "label": "和硕县",
                "pkeyid": "652800",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652829",
                "label": "博湖县",
                "pkeyid": "652800",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "652900",
            "label": "阿克苏地区",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "652901",
                "label": "阿克苏市",
                "pkeyid": "652900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652922",
                "label": "温宿县",
                "pkeyid": "652900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652923",
                "label": "库车县",
                "pkeyid": "652900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652924",
                "label": "沙雅县",
                "pkeyid": "652900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652925",
                "label": "新和县",
                "pkeyid": "652900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652926",
                "label": "拜城县",
                "pkeyid": "652900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652927",
                "label": "乌什县",
                "pkeyid": "652900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652928",
                "label": "阿瓦提县",
                "pkeyid": "652900",
                "code": "",
                "children": ""
              },
              {
                "keyid": "652929",
                "label": "柯坪县",
                "pkeyid": "652900",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "653000",
            "label": "克孜勒苏柯尔克孜自治州",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "653001",
                "label": "阿图什市",
                "pkeyid": "653000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653022",
                "label": "阿克陶县",
                "pkeyid": "653000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653023",
                "label": "阿合奇县",
                "pkeyid": "653000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653024",
                "label": "乌恰县",
                "pkeyid": "653000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "653100",
            "label": "喀什地区",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "653101",
                "label": "喀什市",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653121",
                "label": "疏附县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653122",
                "label": "疏勒县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653123",
                "label": "英吉沙县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653124",
                "label": "泽普县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653125",
                "label": "莎车县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653126",
                "label": "叶城县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653127",
                "label": "麦盖提县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653128",
                "label": "岳普湖县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653129",
                "label": "伽师县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653130",
                "label": "巴楚县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653131",
                "label": "塔什库尔干塔吉克自治县",
                "pkeyid": "653100",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "653200",
            "label": "和田地区",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "653201",
                "label": "和田市",
                "pkeyid": "653200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653221",
                "label": "和田县",
                "pkeyid": "653200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653222",
                "label": "墨玉县",
                "pkeyid": "653200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653223",
                "label": "皮山县",
                "pkeyid": "653200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653224",
                "label": "洛浦县",
                "pkeyid": "653200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653225",
                "label": "策勒县",
                "pkeyid": "653200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653226",
                "label": "于田县",
                "pkeyid": "653200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "653227",
                "label": "民丰县",
                "pkeyid": "653200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "654000",
            "label": "伊犁哈萨克自治州",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "654002",
                "label": "伊宁市",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654003",
                "label": "奎屯市",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654004",
                "label": "霍尔果斯市",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654021",
                "label": "伊宁县",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654022",
                "label": "察布查尔锡伯自治县",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654023",
                "label": "霍城县",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654024",
                "label": "巩留县",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654025",
                "label": "新源县",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654026",
                "label": "昭苏县",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654027",
                "label": "特克斯县",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654028",
                "label": "尼勒克县",
                "pkeyid": "654000",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "654200",
            "label": "塔城地区",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "654201",
                "label": "塔城市",
                "pkeyid": "654200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654202",
                "label": "乌苏市",
                "pkeyid": "654200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654221",
                "label": "额敏县",
                "pkeyid": "654200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654223",
                "label": "沙湾县",
                "pkeyid": "654200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654224",
                "label": "托里县",
                "pkeyid": "654200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654225",
                "label": "裕民县",
                "pkeyid": "654200",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654226",
                "label": "和布克赛尔蒙古自治县",
                "pkeyid": "654200",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "654300",
            "label": "阿勒泰地区",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "654301",
                "label": "阿勒泰市",
                "pkeyid": "654300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654321",
                "label": "布尔津县",
                "pkeyid": "654300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654322",
                "label": "富蕴县",
                "pkeyid": "654300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654323",
                "label": "福海县",
                "pkeyid": "654300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654324",
                "label": "哈巴河县",
                "pkeyid": "654300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654325",
                "label": "青河县",
                "pkeyid": "654300",
                "code": "",
                "children": ""
              },
              {
                "keyid": "654326",
                "label": "吉木乃县",
                "pkeyid": "654300",
                "code": "",
                "children": ""
              }
            ]
          },
          {
            "keyid": "659000",
            "label": "自治区直辖县级行政区划",
            "pkeyid": "650000",
            "code": "",
            "children": [
              {
                "keyid": "659001",
                "label": "石河子市",
                "pkeyid": "659000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "659002",
                "label": "阿拉尔市",
                "pkeyid": "659000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "659003",
                "label": "图木舒克市",
                "pkeyid": "659000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "659004",
                "label": "五家渠市",
                "pkeyid": "659000",
                "code": "",
                "children": ""
              },
              {
                "keyid": "659006",
                "label": "铁门关市",
                "pkeyid": "659000",
                "code": "",
                "children": ""
              }
            ]
          }
        ]
      },
      {
        "keyid": "710000",
        "label": "台湾省",
        "pkeyid": "0000",
        "code": "",
        "children": ""
      },
      {
        "keyid": "810000",
        "label": "香港特别行政区",
        "pkeyid": "0000",
        "code": "",
        "children": ""
      },
      {
        "keyid": "820000",
        "label": "澳门特别行政区",
        "pkeyid": "0000",
        "code": "",
        "children": ""
      }
    ],

    //人事模块
    hrCodeList: [
      'personType',
      'education',
      'titleLevel',
      'titleType',
      'practiceType',
      'recruitType',
      'recruitDegree',
      'quitType',
      'quitReason'

    ],
    //人员类型
    personType: {
      code: 'TYPE-001',
      list: []
    },
    //学历类型编号
    education: {
      code: 'TYPE-002',
      list: []
    },
    //职称等级
    titleLevel: {
      code: 'TYPE-003',
      list: []
    },
    //职称类型
    titleType: {
      code: 'TYPE-004',
      list: []
    },
    //执业类型编号
    practiceType: {
      code: 'TYPE-005',
      list: []
    },
    //招聘类型
    recruitType: {
      code: 'TYPE-006',
      list: []
    },
    //招聘程度
    recruitDegree: {
      code: 'TYPE-007',
      list: []
    },
    //离职类型
    quitType: {
      code: 'TYPE-008',
      list: []
    },
    //离职原因
    quitReason: {
      code: 'TYPE-009',
      list: []
    },
    /**
     * 客户模块
     */
    cusCodeList: ['unitNature', 'serviceBusiness','returnWay','returnTypes','serviceLevel'],
    //单位性质
    unitNature: {
      code: 'TYPE-010',
      list: []
    },
    //服务业务
    serviceBusiness: {
      code: 'TYPE-011',
      list: []
    },
    //回访方式
    returnWay:{
      code: 'TYPE-012',
      list: []
    },
    //回访类型
    returnTypes:{
      code: 'TYPE-013',
      list: []
    },
    //服务评价
    serviceLevel:{
      code: 'TYPE-014',
      list: []
    },
    /**
     * 合同模块
     */
    conCodeList:['businessType','busConType','disputeType','cancelType'],
    //业务类型
    businessType:{
      code: 'TYPE-015',
      list: []
    },
    //业务合同类型
    busConType:{
      code: 'TYPE-016',
      list: []
    },
    //合同争议解决
    disputeType:{
      code: 'TYPE-022',
      list: []
    },
    //合同取消
    cancelType:{
      code: 'TYPE-023',
      list: []
    },
    /**
     * 业务模块工作台
     */
    businessWorkbench:['projectConsultWorkbenchService'],
    //工程咨询服务类型
    projectConsultWorkbenchService:{
      code:'TYPE-047',
      list:[],
    },

    //项目状态
    projectStatus:{
      code:'TYPE-066',
      list:[],
    },
    //工作台
    workbenchType:{
      code:'TYPE-046',
      list:[],
    },
    /**
     * 业务模块工程咨询项目
     */
    //专业工程分类
    projectConsultMajorProject:{
      code:'TYPE-057',
      list:[],
    },
    //决策类型
    projectConsultDecisionType:{
      code:'TYPE-058',
      list:[],
    },
    //项目类型
    projectConsultItemType:{
      code:'TYPE-059',
      list:[],
    },
    //取消类型
    projectConsultItemCancelType:{
      code:'TYPE-063',
      list:[],
    },
    projectConsultWorkGroup:{
      code:'TYPE-064',
      list:[],
    },
    /**
     * 造价咨询项目
     */
    //专业工程分类
    projectCostMajorProject:{
      code:'TYPE-057',
      list:[],
    },
    //项目类型
    projectCostItemType:{
      code:'TYPE-068',
      list:[],
    },
    /**
     * 招标代理
     */
    //专业工程项目
    biddingAgencyMajorProject:{
      code:'TYPE-057',
      list:[],
    },
    //招标类型
    biddingAgencyType:{
      code:'TYPE-071',
      list:[],
    },
    //项目类型
    biddingAgencyItemType:{
      code:'TYPE-072',
      list:[],
    },
    //招标平台
    biddingPlatform:{
      code:'TYPE-080',
      list:[],
    },
    //备案机构
    agencyType:{
      code:'TYPE-081',
      list:[],
    },
    //工程监理
    projectSupervisorMajorProject:{
      code:'TYPE-057',
      list:[],
    },
    //财务明细费用类型
    finDetailType:{
      code:'TYPE-050',
      list:[]
    },
    /**
     * 级联分类
     */
    cascaderCodeList:['nonBusConType','ReimbursReimbursement_bid','Reimbursement_Business','Reimbursement_dept','Reimbursement_commpany','Reimbursement_liu','Reimbursement_zheng'],
    //非业务合同类型
    nonBusConType:{
      code:'TYPE-017',
      list:[]
    },
    //费用报销-投标费用
    ReimbursReimbursement_bid:{
      code:'TYPE-024',
      list:[]
    },
    //费用报销-业务费用
    Reimbursement_Business:{
      code:'TYPE-025',
      list:[]
    },
    //费用报销-部门费用
    Reimbursement_dept:{
      code:'TYPE-026',
      list:[]
    },
    //费用报销-公司费用
    Reimbursement_commpany:{
      code:'TYPE-027',
      list:[]
    },
    //费用报销-刘总费用
    Reimbursement_liu:{
      code:'TYPE-028',
      list:[]
    },
    //费用报销-陈总费用
    Reimbursement_zheng:{
      code:'TYPE-029',
      list:[]
    },
    //审核盖章状态
    reportStatus:{
      code:'TYPE-088',
      list:[]
    }
  },
  getters: {
    loadHrType: state => {
      return {
        titleLevelList: state.titleLevel.list,
        personTypeList: state.personType.list,
        educationList: state.education.list,
        titleTypeList: state.titleType.list,
        practiceTypeList: state.practiceType.list,
        organizeList: state.organizeList,
        positionList: state.positionList,
      }
    },
    loadCusType: state => {
      return {
        region: state.region,
        unitNature: state.unitNature.list,
        serviceBusiness: state.serviceBusiness.list
      }
    },
    singleConType:state=>{
      return state.busConType.list.filter((item,index)=> {
        if (index < 7) {
          return item
        }
      })
    },
    singleBusType:state=>{
      return state.businessType.list.filter((item,index)=> {
        if (index < 5) {
          return item
        }
      })
    },
    frameBusType:state=>{
      return state.businessType.list
    }
  },
  mutations: {
    updateOrganizeList(state, data) {
      state.organizeList = data
    },
    updatePositionList(state, data) {
      state.positionList = data
    },
    updateRegion(state,data){
      state.region=data
    },
    updateType(state, {data, type}) {
      state[type].list = data
    },
  },
  actions: {
    networkGetOrgAndPost(context){
      getOrgTree({keyid: '0000'}).then(item => {
        context.commit('updateOrganizeList', item.data)
      }).catch(() => {
        console.log('loadType:获取组织信息异常')
      })
      getPost().then(item => {
        context.commit('updatePositionList', item.data)
      }).catch(() => {
        console.log('loadType:获取岗位信息异常')
      })
    },
    //人事模块
    networkGetHrLoadData(context) {
      getOrgTree({keyid: '0000'}).then(item => {
        context.commit('updateOrganizeList', item.data)
      }).catch(() => {
        console.log('loadType:获取组织信息异常')
      })
      getPost().then(item => {
        context.commit('updatePositionList', item.data)
      }).catch(() => {
        console.log('loadType:获取岗位信息异常')
      })
      context.state.hrCodeList.forEach(type => {
        getTypeListByCode({code: context.state[type].code}).then(item => {
          context.commit('updateType', {data: item.data, type: type})
        }).catch(() => {
          console.log('loadType:' + type + '获取异常')
        })
      })
    },
    //行政区
    networkGetRegion(context) {
      getRegion().then(item => {
        context.commit('updateRegion', item.data)
      })
    },
    //客户模块
    networkGetCusLoadData(context) {
      context.state.cusCodeList.forEach(type => {
        getTypeListByCode({code: context.state[type].code}).then(item => {
          context.commit('updateType', {data: item.data, type: type})
        }).catch(() => {
          console.log('loadType:' + type + '获取异常')
        })
      })
    },
    //合同模块
    networkGetConLoadData(context){
      context.state.conCodeList.forEach(type => {
        getTypeListByCode({code: context.state[type].code}).then(item => {
          context.commit('updateType', {data: item.data, type: type})
        }).catch(() => {
          console.log('loadType:' + type + '获取异常')
        })
      })
    },
    //获取级联分类
    networkGetCascaderLoadData(context){
      context.state.cascaderCodeList.forEach(type => {

        getCascaderType({code: context.state[type].code}).then(item => {
          context.commit('updateType', {data: item.data, type: type})
        }).catch(() => {
          console.log('loadType:' + type + '获取异常')
        })
      })
    },
    //获取业务模块工作台服务类容
    networkBusinessWorkbenchLoadData(context){
      context.state.businessWorkbench.forEach(type => {
        getTypeListByCode({code: context.state[type].code}).then(item => {
          context.commit('updateType', {data: item.data, type: type})
        }).catch(() => {
          console.log('loadType:' + type + '获取异常')
        })
      })
    },
    networkGetSelect(context,array){
      if (Array.isArray(array)){
        array.forEach(type => {
          getTypeListByCode({code: context.state[type].code}).then(item => {
            context.commit('updateType', {data: item.data, type: type})
          }).catch(() => {
            console.log('loadType:' + type + '获取异常')
          })
        })
      }
    },
    networkGetCascader(context,array){
      if (Array.isArray(array)){
        array.forEach(type => {
          getCascaderType({code: context.state[type].code}).then(item => {
            context.commit('updateType', {data: item.data, type: type})
          }).catch(() => {
            console.log('loadType:' + type + '获取异常')
          })
        })
      }
    },
    networkGetSelectByCode(context,code){
      return getTypeListByCode({code: code}).then(item => {
        return item.data
      })
    },
    networkGetCascaderByCode(context,code){
      return getCascaderType({code: code}).then(item => {
        return item.data
      })
    },
  }
}
export default module;
