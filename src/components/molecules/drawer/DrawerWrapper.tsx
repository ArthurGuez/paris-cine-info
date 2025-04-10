import { Drawer } from 'vaul';
import { Component as Cross } from '../../../icons/cross.svg?svgUse';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  triggerIcon: ReactNode;
}

export default function DrawerWrapper({ children, title, triggerIcon }: Props) {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger>
        <div className="hover:color-accent flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-accent bg-background px-2 uppercase hover:bg-body/5">
          {triggerIcon}
          <span className="hidden text-lg font-bold text-body md:block">{title}</span>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          aria-describedby={undefined}
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
                  {title}
                </Drawer.Title>
              </div>
              <div className="flex flex-col gap-y-4">{children}</div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
