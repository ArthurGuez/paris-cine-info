import { Drawer } from '@base-ui/react/drawer';
import type { ReactNode } from 'react';

import { Component as Cross } from '../icons/cross.svg?svgUse';

interface Props {
  children: ReactNode;
  title: string;
  triggerIcon: ReactNode;
}

export default function DrawerWrapper({ children, title, triggerIcon }: Props) {
  return (
    <Drawer.Root swipeDirection="right">
      <Drawer.Trigger className="hover:color-accent flex h-9 w-10 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-accent bg-background px-2 uppercase hover:bg-body/5 md:h-10 md:w-fit">
        {triggerIcon}
        <span className="hidden text-lg font-bold text-body md:block">{title}</span>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Drawer.Viewport className="fixed inset-0 z-50 flex justify-end">
          <Drawer.Popup className="flex h-full w-full transition-transform duration-300 ease-in-out outline-none data-ending-style:translate-x-full data-starting-style:translate-x-full sm:w-[375px]">
            <Drawer.Content className="flex h-full w-full grow flex-col bg-background p-5 md:border-l md:border-accent">
              <div>
                <div className="relative mb-6">
                  <Drawer.Close className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer border-none bg-transparent p-0">
                    <Cross color="var(--accent)" height="30px" width="30px" />
                  </Drawer.Close>
                  <Drawer.Title className="text-center font-medium text-body uppercase">
                    {title}
                  </Drawer.Title>
                </div>
                <div className="flex flex-col gap-y-4">{children}</div>
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
