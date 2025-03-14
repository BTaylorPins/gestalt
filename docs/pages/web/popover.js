// @flow strict
import { type Node } from 'react';
import { SlimBanner } from 'gestalt';
import PageHeader from '../../docs-components/PageHeader.js';
import MainSection from '../../docs-components/MainSection.js';
import docgen, { type DocGen } from '../../docs-components/docgen.js';
import Page from '../../docs-components/Page.js';
import GeneratedPropTable from '../../docs-components/GeneratedPropTable.js';
import QualityChecklist from '../../docs-components/QualityChecklist.js';
import SandpackExample from '../../docs-components/SandpackExample.js';
import defaultExample from '../../examples/popover/defaultExample.js';
import AccessibilitySection from '../../docs-components/AccessibilitySection.js';

const PREVIEW_HEIGHT = 550;

export default function DocsPage({ generatedDocGen }: {| generatedDocGen: DocGen |}): Node {
  return (
    <Page title="Popover">
      <PageHeader
        name="Popover"
        description={generatedDocGen?.description}
        defaultCode={`
function PopoverExample() {
  const [open, setOpen] = React.useState(false);
  const [selectedBoard, setSelectedBoard] = React.useState('Fashion');
  const anchorRef = React.useRef();

  const SearchBoardField = () => {
    const ref = React.useRef();

    React.useEffect(() => {
      ref.current.focus();
    }, []);

    return (
      <SearchField
        accessibilityLabel="Search boards field"
        id="searchField"
        onChange={() => {}}
        placeholder="Search boards"
        size="lg"
        ref={ref}
      />
    )
  }

  const List = ({ title }) => (
    <Flex direction="column" gap={{ column: 4, row: 0 }}>
      <Text color="default" size="100">
        { title }
      </Text>
      <Flex direction="column" gap={{ column: 4, row: 0 }}>
        {[
          ['https://i.ibb.co/s3PRJ8v/photo-1496747611176-843222e1e57c.webp', 'Fashion', 'Thumbnail image: a white dress with red flowers'],
          ['https://i.ibb.co/swC1qpp/IMG-0494.jpg', 'Food', 'Thumbnail image: a paella with shrimp, green peas, red peppers and yellow rice'],
          ['https://i.ibb.co/PFVF3JH/photo-1583847268964-b28dc8f51f92.webp', 'Home', 'Thumbnail image: a living room with a white couch, two paints in the wall and wooden furniture'],
        ].map((data, index) => (
            <TapArea key={index} onTap={() => {
              setSelectedBoard(data[1]);
              setOpen(false);
            }}>
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

  return (
    <React.Fragment>
      <Flex alignItems="center" gap={{ row: 2, column: 0 }}>
        <Button
          accessibilityHaspopup={true}
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
      {open && (
        <Layer>
          <Popover
            accessibilityLabel="Save to board"
            anchor={anchorRef.current}
            id="main-example"
            idealDirection="down"
            onDismiss={() => setOpen(false)}
            positionRelativeToAnchor={false}
            size="xl"
            showDismissButton
          >
            <Box width={360}>
              <Box flex="grow" marginEnd={4} marginStart={4} marginBottom={8}>
                <Flex direction="column" gap={{ column: 6, row: 0 }}>
                  <Text align="center" color="default" weight="bold">
                    Save to board
                  </Text>
                  <SearchBoardField />
                </Flex>
              </Box>
              <Box height={300} overflow="scrollY">
                <Box marginEnd={4} marginStart={4}>
                  <Flex direction="column" gap={{ column: 8, row: 0 }}>
                    <List title="Top choices"/>
                    <List title="All boards"/>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Popover>
        </Layer>
      )}
    </React.Fragment>
  );
}
  `}
      />
      <GeneratedPropTable generatedDocGen={generatedDocGen} />
      <MainSection name="Usage guidelines">
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            title="When to use"
            description={`
          - Providing additional information for related context without cluttering the surface of a workflow.
          - Bringing attention to specific user interface elements for educational purposes. In this case, likely used with a [Pulsar](/web/pulsar).
          - Accommodating a variety of features, such as Buttons, Images or SearchFields, that are not available in [Dropdown](/web/dropdown).
        `}
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            title="When not to use"
            description={`
          - Displaying critical information that prevents users from accomplishing a task.
          - Displaying information out of context.
          - As a replacement for [Tooltip](/web/tooltip).
          - For presenting a list of actions or options. Use [Dropdown](/web/dropdown) instead.
        `}
          />
        </MainSection.Subsection>
      </MainSection>
      <MainSection name="Best practices">
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            description="Use Popover to display a lightweight task related to the content on screen."
            defaultCode={`
function PopoverExample() {
  const [open, setOpen] = React.useState(false);
  const [selectedBoard, setSelectedBoard] = React.useState('Fashion');
  const anchorRef = React.useRef();

  const SearchBoardField = () => {
    const ref = React.useRef();

    React.useEffect(() => {
      ref.current.focus();
    }, []);

    return (
      <SearchField
        accessibilityLabel="Search boards field"
        id="searchField"
        onChange={() => {}}
        placeholder="Search boards"
        size="lg"
        ref={ref}
      />
    )
  }

  const List = ({ title }) => (
    <Flex direction="column" gap={{ column: 4, row: 0 }}>
      <Text color="default" size="100">
        { title }
      </Text>
      <Flex direction="column" gap={{ column: 4, row: 0 }}>
        {[
          ['https://i.ibb.co/s3PRJ8v/photo-1496747611176-843222e1e57c.webp', 'Fashion', 'Thumbnail image: a white dress with red flowers'],
          ['https://i.ibb.co/swC1qpp/IMG-0494.jpg', 'Food', 'Thumbnail image: a paella with shrimp, green peas, red peppers and yellow rice'],
          ['https://i.ibb.co/PFVF3JH/photo-1583847268964-b28dc8f51f92.webp', 'Home', 'Thumbnail image: a living room with a white couch, two paints in the wall and wooden furniture'],
        ].map((data, index) => (
            <TapArea key={index} onTap={() => {
              setSelectedBoard(data[1]);
              setOpen(false);
            }}>
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

  return (
    <React.Fragment>
      <Flex alignItems="center" gap={{ row: 2, column: 0 }}>
        <Button
          accessibilityHaspopup={true}
          accessibilityExpanded={open}
          accessibilityControls="popover-search"
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
      {open && (
        <Layer>
          <Popover
            anchor={anchorRef.current}
            id="popover-search"
            idealDirection="down"
            onDismiss={() => setOpen(false)}
            positionRelativeToAnchor={false}
            size="xl"
            showDismissButton
          >
            <Box width={360}>
              <Box flex="grow" marginEnd={4} marginStart={4} marginBottom={8}>
                <Flex direction="column" gap={{ column: 6, row: 0 }}>
                  <Text align="center" color="default" weight="bold">
                    Save to board
                  </Text>
                  <SearchBoardField />
                </Flex>
              </Box>
              <Box height={300} overflow="scrollY">
                <Box marginEnd={4} marginStart={4}>
                  <Flex direction="column" gap={{ column: 8, row: 0 }}>
                    <List title="Top choices"/>
                    <List title="All boards"/>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Popover>
        </Layer>
      )}
    </React.Fragment>
  );
}
  `}
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description="Use Popover to communicate critical information, such as an error or interaction feedback. Instead, use the error supplied directly to the form element. See [related](#Related) to learn more."
            defaultCode={`
function PopoverExample() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef();
  const viewRef = React.useRef();

  const isInViewport = () => {
    const rect = viewRef && viewRef.current && viewRef.current.getBoundingClientRect();
    const isVisible = rect
      ? rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      : undefined;

    if (isVisible) {
      setOpen(true)
    }
}

  React.useEffect(() => {
    isInViewport()
    document.addEventListener('scroll', isInViewport), [document, isInViewport]
  });

  return (
    <React.Fragment>
      <Box display="flex" alignItems="center" ref={viewRef} height={200}>
        <TextField
          id="field"
          onChange={() => {}}
          label="Name"
          value="Cats"
          ref={anchorRef}
        />
      </Box>
      {open &&
        <Layer>
          <Popover
            anchor={anchorRef.current}
            color="red"
            idealDirection="down"
            showCaret
            onDismiss={() => {}}
            positionRelativeToAnchor={false}
            size="xs"
          >
            <Box padding={3}>
              <Text color="inverse" align="center">
                You already have a board with that name
              </Text>
            </Box>
          </Popover>
        </Layer>}
    </React.Fragment>
  );
}`}
          />
        </MainSection.Subsection>
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            description="Use Popover to educate users on a new or existing feature. When Popover is triggered automatically, like in the case of user education, be sure to use a blue background and include a caret pointing to the feature. See the [color and caret](#Color-and-caret) variant to learn more."
            defaultCode={`
function PopoverExample() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef();

  React.useEffect(() => {
    setOpen(true)
  }, []);

  return (
    <React.Fragment>
      <IconButton
        accessibilityLabel="Default IconButton"
        iconColor="darkGray"
        icon="filter"
        onClick={() => {}}
        ref={anchorRef}
        size="lg"
      />
      {open &&
        <Layer>
          <Popover
            anchor={anchorRef.current}
            color="blue"
            idealDirection="down"
            showCaret
            onDismiss={() => {}}
            positionRelativeToAnchor={false}
            size="xs"
          >
            <Box padding={3}>
              <Text color="inverse" align="center">
                Filter your board to see your favorite Pins, and more
              </Text>
            </Box>
          </Popover>
        </Layer>}
    </React.Fragment>
  );
}`}
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description="Include a caret if Popover was triggered by user interaction, such as clicking or focusing on [Button](/web/button) or [IconButton](/web/iconbutton)."
            defaultCode={`
function PopoverExample() {
  const [open, setOpen] = React.useState(false);
  const [selectedBoard, setSelectedBoard] = React.useState('Fashion');
  const anchorRef = React.useRef();

  const SearchBoardField = () => {
    const ref = React.useRef();

    React.useEffect(() => {
      ref.current.focus();
    }, []);

    return (
      <SearchField
        accessibilityLabel="Search boards field"
        id="searchField"
        onChange={() => {}}
        placeholder="Search boards"
        size="lg"
        ref={ref}
      />
    )
  }

  const List = ({ title }) => (
    <Flex direction="column" gap={{ column: 4, row: 0 }}>
      <Text color="default" size="100">
        { title }
      </Text>
      <Flex direction="column" gap={{ column: 4, row: 0 }}>
        {[
          ['https://i.ibb.co/s3PRJ8v/photo-1496747611176-843222e1e57c.webp', 'Fashion', 'Thumbnail image: a white dress with red flowers'],
          ['https://i.ibb.co/swC1qpp/IMG-0494.jpg', 'Food', 'Thumbnail image: a paella with shrimp, green peas, red peppers and yellow rice'],
          ['https://i.ibb.co/PFVF3JH/photo-1583847268964-b28dc8f51f92.webp', 'Home', 'Thumbnail image: a living room with a white couch, two paints in the wall and wooden furniture'],
        ].map((data, index) => (
            <TapArea key={index} onTap={() => {
              setSelectedBoard(data[1]);
              setOpen(false);
            }}>
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

  return (
    <React.Fragment>
      <Flex alignItems="center" gap={{ row: 2, column: 0 }}>
        <Button
          accessibilityHaspopup={true}
          accessibilityExpanded={open}
          accessibilityControls="popover-search-boards"
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
      {open && (
        <Layer>
          <Popover
            anchor={anchorRef.current}
            id="popover-search-boards"
            idealDirection="down"
            onDismiss={() => setOpen(false)}
            positionRelativeToAnchor={false}
            showCaret
            size="xl"
            showDismissButton
          >
            <Box width={360}>
              <Box flex="grow" marginEnd={4} marginStart={4} marginBottom={8}>
                <Flex direction="column" gap={{ column: 6, row: 0 }}>
                  <Text align="center" color="default" weight="bold">
                    Save to board
                  </Text>
                  <SearchBoardField />
                </Flex>
              </Box>
              <Box height={300} overflow="scrollY">
                <Box marginEnd={4} marginStart={4}>
                  <Flex direction="column" gap={{ column: 8, row: 0 }}>
                    <List title="Top choices"/>
                    <List title="All boards"/>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Popover>
        </Layer>
      )}
    </React.Fragment>
  );
}
  `}
          />
        </MainSection.Subsection>
      </MainSection>
      <AccessibilitySection name={generatedDocGen?.displayName}>
        <MainSection.Subsection
          title="Keyboard interaction"
          description={`
- When Popover opens, focus moves to the first focusable element in the Popover container.
- Popovers are also a focus trap, so users should only be able to interact with the content inside the Popover container.
- Popover should always be dismissible using the ESC key. It could also be dismissed by interacting with another part of the screen, or by interacting with an element inside Popover.
- When Popover is closed, focus returns to the anchor element that triggered Popover.
`}
        />
        <MainSection.Subsection
          title="ARIA attributes"
          description={`
We recommend passing the following ARIA attribute to Popover for a better screen reader experience:

- \`accessibilityLabel\`: describes the main purpose of a Popover for the screen reader. Should be unique and concise. For example, "Save to board" instead of "Popover".  It populates [aria-label](https://w3c.github.io/aria-practices/#dialog_roles_states_props).
- \`accessibilityDismissButtonLabel\`: describes the purpose of the dismiss button on Popover for the screen reader. Should be clear and concise. For example, "Close board selection popover" instead of "Close".

To further assist screen readers, we recommend passing the following ARIA attributes to the _anchor element_:

- \`accessibilityHaspopup\`: informs the screen reader that there’s a Popover attached to the anchor element. It populates [aria-haspopup](https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html).
- \`accessibilityExpanded\`: informs the screen reader whether Popover is currently open or closed. It populates [aria-expanded](https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html).
- \`accessibilityControls\`: match with the \`id\` of the associated Popover whose contents or visibility are controlled by the interactive component so that screen reader users can identify the relationship between elements. It populates [aria-controls](https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html).

For the \`role\` prop, use:
- 'dialog' if the Popover is a dialog that prompts the user to enter information or requires a response.
- 'menu' if the Popover presents a list of choices to the user.
- 'listbox' if the Popover is a widget that allows the user to select one or more items (whose role is option) from a list. May also include a search option.
`}
        >
          <MainSection.Card
            cardSize="lg"
            sandpackExample={
              <SandpackExample
                code={defaultExample}
                name="Aria example"
                previewHeight={PREVIEW_HEIGHT}
              />
            }
          />
        </MainSection.Subsection>
      </AccessibilitySection>
      <MainSection
        name="Localization"
        description="Be sure to localize any text elements within Popover, along with `accessibilityLabel` and `accessibilityDismissButtonLabel`. Note that localization can lengthen text by 20 to 30 percent."
      >
        <SlimBanner
          iconAccessibilityLabel="Recommendation"
          message="Popovers with a dismiss button announce to assistive technologies that the button will dismiss the Popover. Localize the default label with DefaultLabelProvider."
          type="recommendationBare"
          helperLink={{
            text: 'Learn more',
            accessibilityLabel: 'Learn more about DefaultLabelProvider',
            href: '/web/utilities/defaultlabelprovider',
            onClick: () => {},
          }}
        />
      </MainSection>
      <MainSection name="Variants">
        <MainSection.Subsection
          title="Size"
          description={`
The maximum width of Popover. Popover has different size configurations:
- \`"xs"\`: 180px
- \`"sm"\`: 230px
- \`"md"\`: 284px
- \`"lg"\`: 320px
- \`"xl"\`: 360px
- \`number\`: Use this prop to create custom-size Popovers in pixels.
- \`flexible\`: Use this configuration for larger Popovers. Without a defined maximum width, Popover grows to fit the content in \`children\`.

We recommend using \`"xs\`" for education Popovers and \`"xl\`" for more complex Popovers. Avoid using other configurations whenever possible as they are legacy sizes.
      `}
        />
        <MainSection.Subsection
          title="Color and caret"
          description={`
When building in-product education, be sure to pass in \`color="blue"\` and \`showCaret="true"\`, as seen in the first example, and use [Experience HQ](https://ehq.pinadmin.com/) for the configuration. For Popovers that aren’t education, use the default \`color="white"\` and \`showCaret="false"\`, as seen in the second example. Avoid using any other configurations as they are legacy colors.
`}
        >
          <MainSection.Card
            cardSize="md"
            defaultCode={`
function PopoverExample() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef();

  React.useEffect(() => {
    setOpen(true)
  }, []);

  return (
    <ScrollBoundaryContainer>
      <Flex width={400} justifyContent="center">
        <IconButton
          accessibilityLabel="Default IconButton"
          icon="filter"
          iconColor="darkGray"
          onClick={() => {}}
          ref={anchorRef}
          size="lg"
        />
        {open &&
          <Layer>
            <Popover
              anchor={anchorRef.current}
              color="blue"
              id="popover-educate-2"
              idealDirection="down"
              showCaret
              onDismiss={() => {}}
              positionRelativeToAnchor={false}
              size="xs"
            >
              <Box padding={3}>
                <Text color="inverse" align="center">
                  Filter your board to see your favorite Pins, and more
                </Text>
              </Box>
            </Popover>
          </Layer>}
      </Flex>
    </ScrollBoundaryContainer>
  );
}`}
          />
          <MainSection.Card
            cardSize="md"
            defaultCode={`
function PopoverExample() {
  const [open, setOpen] = React.useState(false);
  const [selectedBoard, setSelectedBoard] = React.useState('Fashion');
  const anchorRef = React.useRef();

  const SearchBoardField = () => {
    const ref = React.useRef();

    React.useEffect(() => {
      ref.current.focus();
    }, []);

    return (
      <SearchField
        accessibilityLabel="Search boards field"
        id="searchField"
        onChange={() => {}}
        placeholder="Search boards"
        size="lg"
        ref={ref}
      />
    )
  }

  const List = ({ title }) => (
    <Flex direction="column" gap={{ column: 4, row: 0 }}>
      <Text color="default" size="100">
        { title }
      </Text>
      <Flex direction="column" gap={{ column: 4, row: 0 }}>
        {[
          ['https://i.ibb.co/s3PRJ8v/photo-1496747611176-843222e1e57c.webp', 'Fashion', 'Thumbnail image: a white dress with red flowers'],
          ['https://i.ibb.co/swC1qpp/IMG-0494.jpg', 'Food', 'Thumbnail image: a paella with shrimp, green peas, red peppers and yellow rice'],
          ['https://i.ibb.co/PFVF3JH/photo-1583847268964-b28dc8f51f92.webp', 'Home', 'Thumbnail image: a living room with a white couch, two paints in the wall and wooden furniture'],
        ].map((data, index) => (
            <TapArea key={index} onTap={() => {
              setSelectedBoard(data[1]);
              setOpen(false);
            }}>
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

  return (
    <React.Fragment>
      <Flex alignItems="center" gap={{ row: 2, column: 0 }}>
        <Button
          accessibilityHaspopup={true}
          accessibilityExpanded={open}
          accessibilityControls="popover-search-board-2"
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
      {open && (
        <Layer>
          <Popover
            anchor={anchorRef.current}
            id="popover-search-board-2"
            idealDirection="down"
            onDismiss={() => setOpen(false)}
            positionRelativeToAnchor={false}
            size="xl"
          >
            <Box width={360}>
              <Box flex="grow" marginEnd={4} marginStart={4} marginTop={6} marginBottom={8}>
                <Flex direction="column" gap={{ column: 6, row: 0 }}>
                  <Text align="center" color="default" weight="bold">
                    Save to board
                  </Text>
                  <SearchBoardField />
                </Flex>
              </Box>
              <Box height={300} overflow="scrollY">
                <Box marginEnd={4} marginStart={4}>
                  <Flex direction="column" gap={{ column: 8, row: 0 }}>
                    <List title="Top choices"/>
                    <List title="All boards"/>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Popover>
        </Layer>
      )}
    </React.Fragment>
  );
}
  `}
          />
        </MainSection.Subsection>

        <MainSection.Subsection
          title="Anchor"
          description={`
Popover requires a reference element, typically [Button](/web/button) or [IconButton](/web/iconbutton), to set its position. The \`anchor\` ref can be directly set on the reference component itself. If the components don’t support \`ref\`, the anchor ref can be set to a parent [Box](/web/box).

Popover calculates its position based on the bounding box of the \`anchor\`. Therefore, the \`anchor\` ref should only include the trigger element itself, usually [Button](/web/button) or [IconButton](/web/iconbutton), or the specific feature component that requires an educational Popover.
`}
        >
          <MainSection.Card
            cardSize="lg"
            defaultCode={`
function PopoverExample() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef();
  const viewRef = React.useRef();

  const isInViewport = () => {
    const rect = viewRef && viewRef.current && viewRef.current.getBoundingClientRect();
    const isVisible = rect
      ? rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      : undefined;

    if (isVisible) {
      setOpen(true)
    }
  }

  React.useEffect(() => {
    isInViewport()
    document.addEventListener('scroll', isInViewport), [document, isInViewport]
  });

  return (
    <ScrollBoundaryContainer>
      <Box ref={viewRef} width={300} height={220}>
        <Box display="flex" justifyContent="center" ref={anchorRef}>
          <Tabs
            activeTabIndex={1}
            onChange={() => {}}
            tabs={[{ href: '#Anchor', text: 'Created'}]}
          />
        </Box>
      </Box>
      {open &&
        <Layer>
          <Popover
            anchor={anchorRef.current}
            color="blue"
            idealDirection="down"
            showCaret
            onDismiss={() => {}}
            positionRelativeToAnchor={false}
            size={240}
          >
            <Box padding={3}>
              <Flex alignItems="center" direction="column" gap={{ column: 4, row: 0 }}>
                <Text color="inverse" align="center">
                  New look! Click Created to see Pins you've published. Click Saved to see your saved Pins and boards.
                </Text>
                <Button
                  color="white"
                  onClick={() => setOpen(false)}
                  size="lg"
                  text="Got it!"
                />
              </Flex>
            </Box>
          </Popover>
        </Layer>}
    </ScrollBoundaryContainer>
  )
}`}
          />
        </MainSection.Subsection>
        <MainSection.Subsection
          title="Dismiss button"
          description={` We highly recommend including a dismiss button on all Popovers with \`showDismissButton\`. This improves accessibility and gives users an immediate action for closing Popover. A label for the button can be provided with the \`accessibilityDismissButtonLabel\` prop. Don't forget to localize this label as well.
`}
        >
          <SlimBanner
            iconAccessibilityLabel="Recommendation"
            message="Popovers with a dismiss button announce to assistive technologies that the button will dismiss the Popover with a default label of 'Close popover'. Localize the default label with DefaultLabelProvider."
            type="recommendationBare"
            helperLink={{
              text: 'Learn more',
              accessibilityLabel: 'Learn more about DefaultLabelProvider',
              href: '/web/utilities/defaultlabelprovider',
              onClick: () => {},
            }}
          />
          <MainSection.Card
            cardSize="lg"
            sandpackExample={
              <SandpackExample
                code={defaultExample}
                name="Dismiss button example"
                previewHeight={PREVIEW_HEIGHT}
              />
            }
          />
        </MainSection.Subsection>
        <MainSection.Subsection
          title="With Layer"
          description={`
Popover is typically used within [Layer](/web/layer). Layer renders Popover outside the DOM hierarchy of the parent allowing it to overlay surrounding content. Popover calculates its position based on the bounding box of the \`anchor\`. Within Layer, Popover no longer shares a relative root with the \`anchor\` and requires \`positionRelativeToAnchor=false\` to properly calculate its position relative to the anchor element.

Using \`Layer\` with Popover eliminates the need to use \`z-index\` to solve stacking context conflicts. Popovers within Modals and Sheets with z-indexes don't require \`zIndex\` in \`Layer\` thanks to the built-in ScrollBoundaryContainer.
`}
        >
          <MainSection.Card
            cardSize="lg"
            defaultCode={`
function ScrollBoundaryContainerExample() {
  const [showSheet, setShowSheet] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const anchorDropdownRef = React.useRef(null);
  const handleSelect = ({ item }) => setSelected(item);

  const SearchBoardField = () => {
    const ref = React.useRef();

    React.useEffect(() => {
      ref.current.focus();
    }, []);

    return (
      <SearchField
        accessibilityLabel="Search boards field"
        id="searchField"
        onChange={() => {}}
        placeholder="Search boards"
        size="lg"
        ref={ref}
      />
    )
  }

  const SelectBoard = () => {
    const [openPopover, setOpenPopover] = React.useState(false);
    const [selectedBoard, setSelectedBoard] = React.useState('Fashion');
    const anchorRef = React.useRef();

    const List = ({ title }) => (
      <Flex direction="column" gap={{ column: 4, row: 0 }}>
        <Text color="default" size="100">
          { title }
        </Text>
        <Flex direction="column" gap={{ column: 4, row: 0 }}>
          {[
            ['https://i.ibb.co/s3PRJ8v/photo-1496747611176-843222e1e57c.webp', 'Fashion', 'Thumbnail image: a white dress with red flowers'],
            ['https://i.ibb.co/swC1qpp/IMG-0494.jpg', 'Food', 'Thumbnail image: a paella with shrimp, green peas, red peppers and yellow rice'],
            ['https://i.ibb.co/PFVF3JH/photo-1583847268964-b28dc8f51f92.webp', 'Home', 'Thumbnail image: a living room with a white couch, two paints in the wall and wooden furniture'],
          ].map((data, index) => (
              <TapArea
                key={index}
                onTap={() => {
                  setSelectedBoard(data[1]);
                  setOpenPopover(false);
                }}
                rounding={2}
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

    return (
      <React.Fragment>
          <Flex direction="column" gap={{ column: 2, row: 0 }}>
            <Text size="100">Board</Text>
            <Button
              accessibilityHaspopup={true}
              accessibilityExpanded={openPopover}
              accessibilityControls="popover-search-board-3"
              iconEnd="arrow-down"
              label="Select Board"
              onClick={() => setOpenPopover(!openPopover)}
              text={selectedBoard}
              ref={anchorRef}
            />
          </Flex>
        {openPopover && (
          <Layer>
            <Popover
              anchor={anchorRef.current}
              id="popover-search-board-3"
              idealDirection="down"
              onDismiss={() => setOpenPopover(false)}
              positionRelativeToAnchor={false}
              size="xl"
              showDismissButton
            >
              <Box width={360}>
                <Box flex="grow" marginEnd={4} marginStart={4} marginBottom={8}>
                  <Flex direction="column" gap={{ column: 6, row: 0 }}>
                    <Text align="center" color="default" weight="bold">
                      Save to board
                    </Text>
                    <SearchBoardField/>
                  </Flex>
                </Box>
                <Box height={300} overflow="scrollY">
                  <Box marginEnd={4} marginStart={4}>
                    <Flex direction="column" gap={{ column: 8, row: 0 }}>
                      <List title="Top choices"/>
                      <List title="All boards"/>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Popover>
          </Layer>
        )}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Button
        accessibilityHaspopup={true}
        accessibilityExpanded={showSheet}
        accessibilityControls="popover-sheet"
        text="Edit Pin"
        onClick={() => setShowSheet(true)}
        size="lg"
      />
      {showSheet && (
        <Layer zIndex={new FixedZIndex(11)}>
          <Sheet
            accessibilityDismissButtonLabel="Close edit Pin sheet"
            accessibilitySheetLabel="Edit your Pin details"
            heading="Edit Pin"
            footer={
                <Flex>
                  <Flex.Item
                    flex="grow"
                  >
                    <Button
                      color="white"
                      text="Delete"
                      size="lg"
                      onClick={() => setShowSheet(false)}
                    />
                  </Flex.Item>
                  <Flex gap={{ column: 0, row: 2 }}>
                    <Button
                      text="Cancel"
                      size="lg"
                      onClick={() => setShowSheet(false)}
                    />
                    <Button
                      text="Done"
                      color="red"
                      size="lg"
                      type="submit"
                      onClick={() => setShowSheet(false)}
                    />
                  </Flex>
                </Flex>
            }
            onDismiss={() => setShowSheet(false)}
            size="lg"
          >
            <Box id="popover-sheet" display="flex" height={400} paddingX={8}>
              <Flex gap={{ row: 8, column: 0 }} width="100%">
                <Box width={200} paddingX={2} rounding={4}>
                  <Mask rounding={4}>
                    <Image
                      alt="Tropic greens: The taste of Petrol and Porcelain | Interior design, Vintage Sets and Unique Pieces agave"
                      color="rgb(231, 186, 176)"
                      naturalHeight={751}
                      naturalWidth={564}
                      src="https://i.ibb.co/7bQQYkX/stock2.jpg"
                    />
                  </Mask>
                </Box>
                <Flex.Item flex="grow">
                  <Flex direction="column" gap={{ column: 8, row: 0 }}>
                    <SelectBoard/>
                    <TextArea
                      id="note"
                      onChange={() => {}}
                      placeholder="Add note"
                      label="Note"
                      value=""
                    />
                  </Flex>
                </Flex.Item>
              </Flex>
              </Box>
          </Sheet>
        </Layer>
      )}
    </React.Fragment>
  )
}
`}
          />
        </MainSection.Subsection>
        <MainSection.Subsection
          title="Ideal direction"
          description={`
Pass in \`idealDirection\` to specify the preferred position of Popover relative to the anchor, such as [Button](/web/button) or [IconButton](/web/iconbutton), that triggered it.

Adjust the \`idealDirection\` as necessary to ensure the visibility of Popover and its contextual information. The default direction is "up", although Popover should be center-aligned directly below the element in most cases. The actual position may change given the available space around the anchor element.
`}
        >
          <MainSection.Card
            cardSize="lg"
            defaultCode={`
function Example() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef();
  const viewRef = React.useRef();

  const isInViewport = () => {
    const rect = viewRef && viewRef.current && viewRef.current.getBoundingClientRect();
    const isVisible = rect
      ? rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      : undefined;

    if (isVisible) {
      setOpen(true)
    }
  }

  React.useEffect(() => {
    isInViewport()
    document.addEventListener('scroll', isInViewport), [document, isInViewport]
  });

  return (
    <ScrollBoundaryContainer>
      <Box
        color="default"
        display="flex"
        alignItems="center"
        ref={viewRef}
        padding={4}
        width={600}
        height={200}
      >
        <Flex gap={{ column: 0, row: 2 }}>
          <Box width={300}>
            <Text>
              You need to add your data source URL to Pinterest so we can access your data source file and create Pins for your products. Before you do this, make sure you have prepared your data source and that you have claimed your website.
            </Text>
          </Box>
          <Button
            ref={anchorRef}
            href="https://help.pinterest.com/en/business/article/data-source-ingestion"
            iconEnd="visit"
            onClick={() => setOpen(false)}
            role="link"
            size="lg"
            target="blank"
            text="Help"
          />
        </Flex>
      </Box>
      {open && (
        <Layer>
          <Popover
            anchor={anchorRef.current}
            color="blue"
            idealDirection="right"
            onDismiss={() => {}}
            positionRelativeToAnchor={false}
            showCaret
            size="xs"
          >
            <Box
              padding={3}
              display="flex"
              alignItems="center"
              direction="column"
            >
              <Text color="inverse" align="center">
                Need help with something? Check out our Help Center.
              </Text>
            </Box>
          </Popover>
        </Layer>
      )}
    </ScrollBoundaryContainer>
    )
}`}
            shaded
          />
        </MainSection.Subsection>
        <MainSection.Subsection
          title="Within scrolling containers"
          description={`
[ScrollBoundaryContainer](/web/utilities/scrollboundarycontainer) is needed for proper positioning when Popover is anchored to an element that is located within a scrolling container. The use of ScrollBoundaryContainer ensures Popover remains attached to its anchor when scrolling.
`}
        >
          <MainSection.Card
            cardSize="lg"
            defaultCode={`
function Example() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef();
  const viewRef = React.useRef();

  const isInViewport = () => {
    const rect = viewRef && viewRef.current && viewRef.current.getBoundingClientRect();
    const isVisible = rect
      ? rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      : undefined;

    if (isVisible) {
      setOpen(true)
    }
  }

  React.useEffect(() => {
    isInViewport()
    document.addEventListener('scroll', isInViewport), [document, isInViewport]
  });

  return (
    <ScrollBoundaryContainer height={200}>
      <Box color="default" ref={viewRef} padding={4} width={600}>
        <Flex gap={{ column: 0, row: 4 }}>
          <Box width={200}>
            <Text>
              You need to add your data source URL to Pinterest so we can access your data source file and create Pins for your products. Before you do this, make sure you have prepared your data source and that you have claimed your website. If there are any errors with your data source file, you can learn how to troubleshoot them below. After you click Create Pins, you'll land back at the main data source page while your feed is being processed. Wait for a confirmation email from Pinterest about the status of your data source submission.
            </Text>
          </Box>
          <Button
            ref={anchorRef}
            href="https://help.pinterest.com/en/business/article/data-source-ingestion"
            iconEnd="visit"
            onClick={() => setOpen(false)}
            role="link"
            size="lg"
            target="blank"
            text="Help"
          />
          {open && (
            <Layer>
              <Popover
                anchor={anchorRef.current}
                color="blue"
                idealDirection="right"
                onDismiss={() => {}}
                positionRelativeToAnchor={false}
                showCaret
                size="xs"
              >
                <Box
                  padding={3}
                  display="flex"
                  alignItems="center"
                  direction="column"
                >
                  <Text color="inverse" align="center">
                    Need help with something? Check out our Help Center.
                  </Text>
                </Box>
              </Popover>
            </Layer>
          )}
        </Flex>
      </Box>
    </ScrollBoundaryContainer>
)}`}
            shaded
          />
        </MainSection.Subsection>
      </MainSection>
      <MainSection name="Writing">
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            description={`
- Be clear and predictable so that people anticipate what will happen when they interact with an item.
- Focus on the action by beginning with a verb.
- Use succinct and scannable language.
- Use sentence case while always capitalizing the word “Pin.”
`}
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            description={`
- Describe the interface element, like “button,” “icon” or “menu” in education messaging, unless it’s absolutely necessary for clarity.
- Use words like “click” or “tap” in education messaging, if possible, or assume universal accessibility.
- Use Popover to communicate critical information, such as an error or interaction feedback.
`}
          />
        </MainSection.Subsection>
      </MainSection>
      <QualityChecklist component={generatedDocGen?.displayName} />

      <MainSection name="Related">
        <MainSection.Subsection
          description={`
**[Dropdown](/web/dropdown)**
Dropdown is an element constructed using Popover as its container. Use Dropdown to display a list of actions or options in a Popover.

**[Toast](/web/toast)**
Toast provides feedback on an interaction. One example of Toast is the confirmation that appears when a Pin has been saved. Toasts appear at the bottom of a desktop screen or top of a mobile screen instead of being attached to any particular element on the interface.

**[Tooltip](/web/tooltip)**
Tooltip describes the function of an interactive element, typically [IconButton](/web/iconbutton), on hover. While Popovers offer broader content options, such as [Button](/web/button) and [Images](/web/image), Tooltips are purely text-based.

**[Layer](/web/layer)**
Layer renders Popover outside the DOM hierarchy of the parent and prevents surrounding components overlaying Popover. See the [with Layer](#With-layer) variant to learn more.

**[ScrollBoundaryContainer](/web/utilities/scrollboundarycontainer)**
ScrollBoundaryContainer is needed for proper positioning when Popover is anchored to an element that is located within a scrolling container. The use of ScrollBoundaryContainer ensures that Popover remains attached to its anchor when scrolling. See the [within scrolling containers](#Within-scrolling-containers) variant to learn more.
    `}
        />
      </MainSection>
    </Page>
  );
}

export async function getServerSideProps(): Promise<{| props: {| generatedDocGen: DocGen |} |}> {
  return {
    props: { generatedDocGen: await docgen({ componentName: 'Popover' }) },
  };
}
