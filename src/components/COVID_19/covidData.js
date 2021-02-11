import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandsWash,
    faHeadSideMask,
    faExchangeAlt,
    faSyncAlt,
    faPeopleArrows,
    faVirus
} from "@fortawesome/free-solid-svg-icons"

export const shopPlan = [{
        title: "手指の消毒",
        description: "お店のスタッフも清潔な手で接客をさせていただきます",
        icon: faHandsWash
    },
    {
        title: "マスク着用",
        description: "接客時にはマスクを着用させていただきます。",
        icon: faHeadSideMask
    },
    {
        title: "吹ざ竿の交換",
        description: "ガラス吹きの際には、吹く竿を一本一本交代しております",
        icon: faExchangeAlt
    },
    {
        title: "体験場の換気",
        description: "空気が密閉しないように換気ダクトを使用しお部屋の空気を外に逃しております。",
        icon: faSyncAlt
    },
    {
        title: "密にしない",
        description: "体験上ではお席が近くなりすぎないように、感覚を開けての体験をご案内しております。",
        icon: faPeopleArrows
    },
]

export const customerPlan = [{
        title: "手指の消毒",
        description: "ご来店の方には手指の消毒をお願いしております。",
        icon: faHandsWash
    },
    {
        title: "マスク着用",
        description: "飛沫感染防止の観点から必ずマスクの着用をお願いしております。",
        icon: faHeadSideMask
    },
    {
        title: "濃厚接触の疑いのある方",
        description: "感染された方と濃厚接触の疑いがある方は体験はお控えください。",
        icon: faVirus
    },
    {
        title: "密にしない",
        description: "密な環境を作らないためにも体験場もお席に限りがあります。ご希望のお時間にご予約できない事もあるのでご了承ください",
        icon: faPeopleArrows
    },
]