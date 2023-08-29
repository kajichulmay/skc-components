import React from "react";
interface CardDetailProps {
    data: {
        title: string;
        total: number;
        unit: string;
    };
    colorCard: string;
}
declare function CardDetail(props: CardDetailProps): React.JSX.Element;
export default CardDetail;
