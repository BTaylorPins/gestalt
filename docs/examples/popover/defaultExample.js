// @flow strict
import { type Node, useRef, useState } from 'react';
import {
  Popover,
  Box,
  Button,
  Flex,
  Layer,
  Text,
  SearchField,
  TapArea,
  Mask,
  Image,
} from 'gestalt';

function List({
  title,
  setSelectedBoard,
  setOpen,
}: {|
  title: string,
  setSelectedBoard: (string) => void,
  setOpen: (boolean) => void,
|}) {
  return (
    <Flex direction="column" gap={{ column: 4, row: 0 }}>
      <Text color="default" size="100">
        {title}
      </Text>
      <Flex direction="column" gap={{ column: 4, row: 0 }}>
        {[
          [
            'https://i.ibb.co/s3PRJ8v/photo-1496747611176-843222e1e57c.webp',
            'Fashion',
            'Thumbnail image: a white dress with red flowers',
          ],
          [
            'https://i.ibb.co/swC1qpp/IMG-0494.jpg',
            'Food',
            'Thumbnail image: a paella with shrimp, green peas, red peppers and yellow rice',
          ],
          [
            'https://i.ibb.co/PFVF3JH/photo-1583847268964-b28dc8f51f92.webp',
            'Home',
            'Thumbnail image: a living room with a white couch, two paints in the wall and wooden furniture',
          ],
        ].map((data) => (
          <TapArea
            key={data[1]}
            onTap={() => {
              setSelectedBoard(data[1]);
              setOpen(false);
            }}
          >
            <Flex gap={{ row: 2, column: 0 }} alignItems="center">
              <Box height={50} width={50} overflow="hidden" rounding={2}>
                <Mask rounding={2}>
                  <Image
                    alt={data[2]}
                    color="rgb(231, 186, 176)"
                    naturalHeight={50}
                    naturalWidth={50}
                    src={data[0]}
                  />
                </Mask>
              </Box>
              <Text align="center" color="default" weight="bold">
                {data[1]}
              </Text>
            </Flex>
          </TapArea>
        ))}
      </Flex>
    </Flex>
  );
}

export default function DismissButton(): Node {
  const [open, setOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState('Fashion');
  const anchorRef = useRef();

  return (
    <Flex alignItems="start" justifyContent="center" height="100%" width="100%">
      <Box padding={3}>
        <Flex alignItems="center" gap={{ row: 2, column: 0 }}>
          <Button
            accessibilityHaspopup
            accessibilityExpanded={open}
            accessibilityControls="main-example"
            color="white"
            iconEnd="arrow-down"
            onClick={() => setOpen(!open)}
            ref={anchorRef}
            size="lg"
            selected={open}
            text={selectedBoard}
          />
          <Button color="red" onClick={() => {}} size="lg" text="Save" />
        </Flex>
      </Box>
      {open && (
        <Layer>
          <Popover
            accessibilityLabel="Save to board"
            anchor={anchorRef.current}
            id="main-example"
            idealDirection="down"
            onDismiss={() => setOpen(false)}
            positionRelativeToAnchor={false}
            showDismissButton
            size="xl"
          >
            <Box width={360}>
              <Box flex="grow" marginEnd={4} marginStart={4} marginBottom={8}>
                <Flex direction="column" gap={{ column: 6, row: 0 }}>
                  <Text align="center" color="default" weight="bold">
                    Save to board
                  </Text>
                  <SearchField
                    accessibilityLabel="Search boards field"
                    id="searchField"
                    onChange={() => {}}
                    placeholder="Search boards"
                    size="lg"
                  />
                </Flex>
              </Box>
              <Box height={300} overflow="scrollY">
                <Box marginEnd={4} marginStart={4}>
                  <Flex direction="column" gap={{ column: 8, row: 0 }}>
                    <List
                      title="Top choices"
                      setSelectedBoard={setSelectedBoard}
                      setOpen={setOpen}
                    />
                    <List
                      title="All boards"
                      setSelectedBoard={setSelectedBoard}
                      setOpen={setOpen}
                    />
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Popover>
        </Layer>
      )}
    </Flex>
  );
}
