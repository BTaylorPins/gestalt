// @flow strict
import { type Node, Children, cloneElement, Fragment, useEffect, useRef, useState } from 'react';
import styles from './Table.css';
import Box from './Box.js';
import { useTableContext } from './contexts/TableContext.js';

type Props = {|
  /**
   * Must be instances of Table.Cell. See the [Subcomponent section](https://gestalt.pinterest.systems/web/table#Subcomponents) to learn more.
   */
  children: Node,
  /**
   * The contents within the drawer.
   */
  drawerContents: Node,
  /**
   * Unique id for Table.RowDrawer.
   */
  id: string,
|};

/**
 * Use [Table.RowDrawer](https://gestalt.pinterest.systems/web/table#Table.RowDrawer) to define a row drawer to display additional content.
 */
export default function TableRowDrawer({ children, drawerContents, id }: Props): Node {
  const { stickyColumns } = useTableContext();
  const rowRef = useRef();
  const [columnWidths, setColumnWidths] = useState([]);

  useEffect(() => {
    if (rowRef?.current && stickyColumns) {
      const colWidths = [...rowRef.current.children].map((item) => item.clientWidth);
      setColumnWidths(colWidths);
    }
  }, [stickyColumns]);

  const renderCellWithAdjustedIndex = (child, index) => {
    // Account for initial expandable column
    const adjustedIndex = index + 1;
    const shouldBeSticky = stickyColumns
      ? stickyColumns >= 0 && adjustedIndex < stickyColumns
      : false;
    const shouldHaveShadow = stickyColumns ? stickyColumns - 1 === adjustedIndex : false;
    const previousWidths = columnWidths.slice(0, adjustedIndex);
    const previousTotalWidth =
      previousWidths.length > 0 ? previousWidths.reduce((a, b) => a + b) : 0;
    return cloneElement(child, { shouldBeSticky, previousTotalWidth, shouldHaveShadow });
  };

  return (
    <Fragment>
      <tr aria-details={drawerContents ? id : undefined} ref={rowRef}>
        {Number(stickyColumns) > 0 ? Children.map(children, renderCellWithAdjustedIndex) : children}
      </tr>
      {drawerContents ? (
        <tr id={id}>
          <td className={styles.drawer} colSpan={Children.count(children) + 1}>
            <Box padding={2}>{drawerContents}</Box>
          </td>
        </tr>
      ) : null}
    </Fragment>
  );
}

TableRowDrawer.displayName = 'Table.RowDrawer';
