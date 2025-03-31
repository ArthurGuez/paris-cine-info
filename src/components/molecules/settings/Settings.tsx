import { Drawer } from 'vaul';
import ThemeSetting from './ThemeSetting';
import { Component as Cross } from '../../../icons/cross.svg?svgUse';
import TitleDisplaySetting from './TitleDisplaySetting';
import { Component as Gear } from '../../../icons/gear.svg?svgUse';

const TITLE = 'Réglages';

export default function Settings() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger>
        <div className="flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-accent px-2 uppercase md:rounded-2xl md:px-6">
          <Gear color="var(--accent)" height="25px" width="25px" />
          <span className="hidden text-lg font-bold text-body md:block">{TITLE}</span>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="fixed top-0 right-0 bottom-0 z-10 flex w-[375px] outline-none"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
        >
          <div className="flex h-full w-full grow flex-col bg-background p-5 md:border-l md:border-accent">
            <div>
              <div className="relative mb-6">
                <Drawer.Close className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer">
                  <Cross color="var(--accent)" height="30px" width="30px" />
                </Drawer.Close>
                <Drawer.Title className="text-center font-medium text-body uppercase">
                  {TITLE}
                </Drawer.Title>
              </div>
              <div className="flex flex-col gap-y-4">
                <ThemeSetting />
                <TitleDisplaySetting />
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
