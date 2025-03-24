import { useState, type ReactNode } from 'react';
import { Drawer } from 'vaul';
import ThemeSetting from './ThemeSetting';
import { Component as Cross } from '../../../icons/cross.svg?svgUse';
import TitleDisplaySetting from './TitleDisplaySetting';

const TITLE = 'Réglages';

interface Props {
  children: ReactNode;
}

export default function Settings({ children }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer.Root direction="right" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <Drawer.Trigger>
        <div className="flex h-10 w-40 flex-1 cursor-pointer items-center justify-center gap-1.5 border border-accent uppercase">
          {children}
          <span className="text-lg font-bold text-body">{TITLE}</span>
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
                <Cross
                  className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                  color="var(--accent)"
                  height="30px"
                  width="30px"
                />
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
