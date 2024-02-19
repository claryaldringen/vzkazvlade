import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(
        `https://www.fio.cz/ib_api/rest/last/${process.env.FIO_API_TOKEN}/transactions.json`,
    );

    const data = await response.json();

    const exist = (
        data?.accountStatement?.transactionList?.transaction || []
    ).some((obj: any) => {
        return obj?.column5?.value == '20240219';
    });

    if (exist) {
        res.status(200).json({ message: 'ok' });
    } else {
        res.status(402).json({ message: 'failed' });
    }
};

export default handler;
