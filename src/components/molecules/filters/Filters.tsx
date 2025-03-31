import { Drawer } from 'vaul';
import { Component as FilterIcon } from '../../../icons/filters.svg?svgUse';

export default function Filters() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <div className="flex h-10 w-fit cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-accent bg-background px-6 py-5 text-lg uppercase">
          <FilterIcon color="var(--accent)" height="30px" width="30px" />
          <span className="font-bold text-body md:text-lg">Filtres</span>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed right-0 bottom-0 left-0 h-fit bg-gray-100 outline-none">
          <div className="bg-background p-4 text-body">
            <p>tutu</p>
            <p>tutu</p>
            <p>tutu</p>
            <p>tutu</p>
            <p>tutu</p>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
