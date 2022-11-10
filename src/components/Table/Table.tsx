import { ITable } from '../../interfaces';

import { setFormatDate } from '../../utils';

import {
  TableWrapper,
  TableContent,
  TableHeader,
  TableOrder,
  TableSection,
  TableContentItem,
  TableContentItemText,
} from './styles';

const Table = ({ headers, tableItems }: ITable) => (
  <TableWrapper>
    <TableHeader>
      {headers.map((item) => (
        <TableOrder key={item.id}>
          <TableSection>{item.type}</TableSection>
        </TableOrder>
      ))}
    </TableHeader>
    {tableItems.map((item, idx) => (
      <TableContent key={idx}>
        <TableContentItem>
          <TableContentItemText>{item.client}</TableContentItemText>
        </TableContentItem>
        <TableContentItem>
          <TableContentItemText state={item.paymentStatus}>
            {item.paymentStatus}
          </TableContentItemText>
        </TableContentItem>
        <TableContentItem>
          <TableContentItemText state={item.cargoStatus}>
            {item.cargoStatus}
          </TableContentItemText>
        </TableContentItem>
        <TableContentItem>
          <TableContentItemText>
            {setFormatDate('dd/MM/yyyy', item.date)}
          </TableContentItemText>
        </TableContentItem>
        <TableContentItem>
          <TableContentItemText>{item.amount}</TableContentItemText>
        </TableContentItem>
        <TableContentItem>
          <TableContentItemText>{item.typeOfPayment}</TableContentItemText>
        </TableContentItem>
        <TableContentItem>
          <TableContentItemText>{item.installmentsPayed}</TableContentItemText>
        </TableContentItem>
        <TableContentItem>
          <TableContentItemText>
            {setFormatDate('MMM dd', item.paymentDueDate)}
          </TableContentItemText>
        </TableContentItem>
        <TableContentItem>
          <TableContentItemText>Authorize Credit</TableContentItemText>
        </TableContentItem>
      </TableContent>
    ))}
  </TableWrapper>
);

export default Table;
