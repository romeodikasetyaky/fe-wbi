// import node module libraries
import { ListGroup, Card } from 'react-bootstrap';
import Link from 'next/link';

const PricingCard = ({ content }) => {
    let plan = content[0];
    return (
        <Card>
            <Card.Body className="p-6">
                <h2 className="mb-3">{plan.plantitle}</h2>
                <p className="mb-0" dangerouslySetInnerHTML={{ __html: plan.description }}></p>
                <Link href={plan.url}  className={`btn btn-${plan.buttonClass ? plan.buttonClass : 'outline-primary'
                    }`}>
                    {plan.buttonText}
                </Link>
            </Card.Body>
        </Card>
    )
}

export default PricingCard