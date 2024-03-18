import { Icon, IconCatalog, IconStyle } from './Icon';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    icon: IconCatalog.adjustmentsHorizontal,
    iconStyle: IconStyle.regular,
    className: 'w-6 h-6',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="inline-flex flex-wrap content-end items-end gap-3">
        <Icon {...args} icon={IconCatalog.adjustmentsHorizontal} />
        <Icon {...args} icon={IconCatalog.arrowBendRightUp} />
        <Icon {...args} icon={IconCatalog.arrowFatLinesUp} />
        <Icon {...args} icon={IconCatalog.arrowLeft} />
        <Icon {...args} icon={IconCatalog.arrowLongDown} />
        <Icon {...args} icon={IconCatalog.arrowLongLeft} />
        <Icon {...args} icon={IconCatalog.arrowLongRight} />
        <Icon {...args} icon={IconCatalog.arrowRightOnRectangle} />
        <Icon {...args} icon={IconCatalog.arrowSquareOut} />
        <Icon {...args} icon={IconCatalog.arrowsOutSimple} />
        <Icon {...args} icon={IconCatalog.bars3} />
        <Icon {...args} icon={IconCatalog.barsArrowDown} />
        <Icon {...args} icon={IconCatalog.beaker} />
        <Icon {...args} icon={IconCatalog.bolt} />
        <Icon {...args} icon={IconCatalog.bookOpenText} />
        <Icon {...args} icon={IconCatalog.bookmark} />
        <Icon {...args} icon={IconCatalog.broom} />
        <Icon {...args} icon={IconCatalog.bugAnt} />
        <Icon {...args} icon={IconCatalog.check} />
        <Icon {...args} icon={IconCatalog.checkCircle} />
        <Icon {...args} icon={IconCatalog.chevronDown} />
        <Icon {...args} icon={IconCatalog.chevronRight} />
        <Icon {...args} icon={IconCatalog.chevronUp} />
        <Icon {...args} icon={IconCatalog.circleHalf} />
        <Icon {...args} icon={IconCatalog.clipboard} />
        <Icon {...args} icon={IconCatalog.clock} />
        <Icon {...args} icon={IconCatalog.cog6Tooth} />
        <Icon {...args} icon={IconCatalog.discord} />
        <Icon {...args} icon={IconCatalog.documentCheck} />
        <Icon {...args} icon={IconCatalog.dotsThree} />
        <Icon {...args} icon={IconCatalog.ellipsisHorizontal} />
        <Icon {...args} icon={IconCatalog.ellipsisHorizontalCircle} />
        <Icon {...args} icon={IconCatalog.envelope} />
        <Icon {...args} icon={IconCatalog.expandList} />
        <Icon {...args} icon={IconCatalog.faceSmile} />
        <Icon {...args} icon={IconCatalog.gitHub} />
        <Icon {...args} icon={IconCatalog.globeAlt} />
        <Icon {...args} icon={IconCatalog.grid} />
        <Icon {...args} icon={IconCatalog.hashtag} />
        <Icon {...args} icon={IconCatalog.heart} />
        <Icon {...args} icon={IconCatalog.home} />
        <Icon {...args} icon={IconCatalog.informationCircle} />
        <Icon {...args} icon={IconCatalog.instagram} />
        <Icon {...args} icon={IconCatalog.lifebuoy} />
        <Icon {...args} icon={IconCatalog.lightBulb} />
        <Icon {...args} icon={IconCatalog.linkedin} />
        <Icon {...args} icon={IconCatalog.list} />
        <Icon {...args} icon={IconCatalog.lockClosed} />
        <Icon {...args} icon={IconCatalog.magicWand} />
        <Icon {...args} icon={IconCatalog.magnifyingGlass} />
        <Icon {...args} icon={IconCatalog.minusSmall} />
        <Icon {...args} icon={IconCatalog.moon} />
        <Icon {...args} icon={IconCatalog.paperAirplane} />
        <Icon {...args} icon={IconCatalog.plusSmall} />
        <Icon {...args} icon={IconCatalog.power} />
        <Icon {...args} icon={IconCatalog.questionMark} />
        <Icon {...args} icon={IconCatalog.questionMarkCircle} />
        <Icon {...args} icon={IconCatalog.scissors} />
        <Icon {...args} icon={IconCatalog.sidebarLeft} />
        <Icon {...args} icon={IconCatalog.sidebarRight} />
        <Icon {...args} icon={IconCatalog.sliders} />
        <Icon {...args} icon={IconCatalog.sparkles} />
        <Icon {...args} icon={IconCatalog.square2Stack} />
        <Icon {...args} icon={IconCatalog.squareHalf} />
        <Icon {...args} icon={IconCatalog.squares2x2} />
        <Icon {...args} icon={IconCatalog.star} />
        <Icon {...args} icon={IconCatalog.suitcase} />
        <Icon {...args} icon={IconCatalog.sun} />
        <Icon {...args} icon={IconCatalog.table} />
        <Icon {...args} icon={IconCatalog.textT} />
        <Icon {...args} icon={IconCatalog.threads} iconStyle={IconStyle.solid} />
        <Icon {...args} icon={IconCatalog.tiktok} />
        <Icon {...args} icon={IconCatalog.trash} />
        <Icon {...args} icon={IconCatalog.twitter} />
        <Icon {...args} icon={IconCatalog.typefully} iconStyle={IconStyle.solid} />
        <Icon {...args} icon={IconCatalog.user} />
        <Icon {...args} icon={IconCatalog.viewfinder} />
        <Icon {...args} icon={IconCatalog.voice} />
        <Icon {...args} icon={IconCatalog.x} />
        <Icon {...args} icon={IconCatalog.xMark} />
      </div>
    );
  },
};
