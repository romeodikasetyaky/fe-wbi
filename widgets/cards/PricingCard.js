// import node module libraries
import { ListGroup, Card } from 'react-bootstrap';
import Link from 'next/link';

const PricingCard = ({ content }) => {
    let plan = content[0];
    return (
        <Card>
            <Card.Body className="p-6">
                <h2 className="mb-3"><b>{plan.plantitle}</b></h2>
                <table width= '85%' font-size= '20px'>
                    <tr>
                        <td className="mb-2" dangerouslySetInnerHTML={{ __html: plan.description1 }}></td>
                        <td className="mb-2" dangerouslySetInnerHTML={{ __html: plan.description2 }}></td>
                        <td className="mb-2" dangerouslySetInnerHTML={{ __html: plan.description3 }}></td>
                    </tr>
                    <tr>
                        <td className="mb-2" dangerouslySetInnerHTML={{ __html: plan.description4 }}></td>
                        <td className="mb-2" dangerouslySetInnerHTML={{ __html: plan.description5 }}></td>
                        <td className="mb-2" dangerouslySetInnerHTML={{ __html: plan.description6 }}></td>
                    </tr>
                    <tr>
                        <td className="mb-2" dangerouslySetInnerHTML={{ __html: plan.description7 }}></td>
                        <td className="mb-2" dangerouslySetInnerHTML={{ __html: plan.description8 }}></td>
                    </tr>
                </table>
                <Link href={plan.url}  className={`mt-3 btn btn-${plan.buttonClass ? plan.buttonClass : 'outline-primary'
                    }`}>
                    {plan.buttonText}
                </Link>
            </Card.Body>
        </Card>
    )
}

export default PricingCard