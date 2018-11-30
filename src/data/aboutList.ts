import { ImageTextData } from '../type/Interfaces';
const baseUrl = process.env.BASE_URL;

export const aboutUsDatas: ImageTextData[] = [
  {
    title: '',
    content: 'XXX物流有限公司是一家专注于国内干线运输、货物仓储、市区配送、物流解决方案策划与设计的国家5A级综合物流企业。公司以福州为总部，设立东、南、西、北4大区域，拥有215家分公司，仓储总面积65万平方米，自有货车1300多辆，长期加盟的社会车辆10000辆。公司自成立以来，先后获得中国物流百强企业、中国民营物流企业十强、全国制造业与物流业联动发展示范企业、国家甩挂运输试点单位、全国公路零担快运三十强',
    btnLink: '/about',
    btnText: '查看更多',
    imgLink: `${baseUrl}img3.jpg`

  },
  {
    title: '物流解决方案策划',
    content: '打造夕发朝至的城际甩挂运输精品快运线路，提供仓储、包装、加工、搬运、装卸、代收货款、信息化数据共享等增值服务，不断提升物流运作能力和服务品质，努力建设成为中国领先的、值得尊敬和信赖的综合物流合作伙伴。',
    btnLink: '/about',
    btnText: '了解详情',
    imgLink: `${baseUrl}img3.jpg`
  },
];