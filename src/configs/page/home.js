import bg from '~/assets/images/bg.png';
import bgOverlay from '~/assets/images/bg-o.png';
import bg2 from '~/assets/images/bg2.png';
import bg3 from '~/assets/images/bg3.png';
import bg3Overlay from '~/assets/images/bg3-o.png';
import bg4 from '~/assets/images/bg4.png';
import bg4Overlay from '~/assets/images/bg4-o.png';
import { CONTENT_POS } from '~/components/layout/CTA/CTACard';

export const CTACards = [
  {
    category: 'Collection',
    bigTitle: <span>New <br/>Curtains</span>,
    image: bg,
    imageOverlay: bgOverlay,
    contentPos: CONTENT_POS.BOTTOM_LEFT,
  },
  {
    category: 'Collection',
    bigTitle: 'New Collection',
    image: bg2,
    ctaDark: true,
  },
  {
    category: 'SALES',
    title: 'SALE UPTO',
    details: '70%',
    image: bg4,
    imageOverlay: bg4Overlay,
  },
  {
    category: 'Membership',
    title: 'New Membership',
    details: '10% Off',
    image: bg3,
    imageOverlay: bg3Overlay,
  },
];