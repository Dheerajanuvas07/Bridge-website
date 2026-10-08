'use client';
// Adapted from Watermelon UI animated-accordion (MIT, github.com/WatermelonCorp/watermellon-registry).
// Changes: Bridge type scale and 48px+ triggers; answers stay rendered (keepRendered
// defaults to true) so they are searchable and indexable; content marked data-motion.

import * as React from 'react';
import { Accordion as AccordionPrime } from 'radix-ui';
import { ChevronDownIcon } from 'lucide-react';

import { motion, AnimatePresence, useReducedMotion, type HTMLMotionProps } from 'motion/react';

import { cn } from '@/lib/utils';

type AccordionProps = AccordionPrimitiveProps;

function Accordion(props: AccordionProps) {
  return <AccordionPrimitive {...props} />;
}

type AccordionItemProps = AccordionItemPrimitiveProps;

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionItemPrimitive
      className={cn('border-b border-line', className)}
      {...props}
    />
  );
}

type AccordionTriggerProps = AccordionTriggerPrimitiveProps & {
  showArrow?: boolean;
};

function AccordionTrigger({
  className,
  children,
  showArrow = true,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionHeaderPrimitive className="flex">
      <AccordionTriggerPrimitive
        className={cn(
          'flex min-h-16 flex-1 items-start justify-between gap-6 py-6 text-left text-h3 font-semibold leading-snug transition-colors hover:text-accent disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <ChevronDownIcon className="pointer-events-none size-6 shrink-0 translate-y-1 text-accent transition-transform duration-200" />
        )}
      </AccordionTriggerPrimitive>
    </AccordionHeaderPrimitive>
  );
}

type AccordionContentProps = AccordionContentPrimitiveProps;

function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionContentPrimitive {...props}>
      <div className={cn('max-w-[var(--container-prose)] pb-7 text-body text-muted', className)}>{children}</div>
    </AccordionContentPrimitive>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionContentProps,
};




type AccordionContextType = {
  value: string | string[] | undefined;
  setValue: (value: string | string[] | undefined) => void;
};

type AccordionItemContextType = {
  value: string;
  isOpen: boolean;
};

const [AccordionProvider, useAccordion] =
  getStrictContext<AccordionContextType>('AccordionContext');

const [AccordionItemProvider, useAccordionItem] =
  getStrictContext<AccordionItemContextType>('AccordionItemContext');

type AccordionPrimitiveProps = React.ComponentProps<typeof AccordionPrime.Root>;

function AccordionPrimitive(props: AccordionPrimitiveProps) {
  const [value, setValue] = useControlledState<string | string[] | undefined>({
    value: props?.value,
    defaultValue: props?.defaultValue,
    onChange: props?.onValueChange as (
      value: string | string[] | undefined,
    ) => void,
  });

  return (
    <AccordionProvider value={{ value, setValue }}>
      <AccordionPrime.Root
        data-slot="accordion"
        {...props}
        onValueChange={setValue}
      />
    </AccordionProvider>
  );
}

type AccordionItemPrimitiveProps = React.ComponentProps<typeof AccordionPrime.Item>;

function AccordionItemPrimitive(props: AccordionItemPrimitiveProps) {
  const { value } = useAccordion();
  // Derived, not mirrored into state. Exact match for single mode
  // (upstream used String.includes, which matched substrings).
  const isOpen = Array.isArray(value) ? value.includes(props.value) : value === props.value;

  return (
    <AccordionItemProvider value={{ isOpen, value: props.value }}>
      <AccordionPrime.Item data-slot="accordion-item" {...props} />
    </AccordionItemProvider>
  );
}

type AccordionHeaderPrimitiveProps = React.ComponentProps<
  typeof AccordionPrime.Header
>;

function AccordionHeaderPrimitive(props: AccordionHeaderPrimitiveProps) {
  return <AccordionPrime.Header data-slot="accordion-header" {...props} />;
}

type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof AccordionPrime.Trigger
>;

function AccordionTriggerPrimitive(props: AccordionTriggerPrimitiveProps) {
  return (
    <AccordionPrime.Trigger data-slot="accordion-trigger" {...props} />
  );
}

type AccordionContentPrimitiveProps = Omit<
  React.ComponentProps<typeof AccordionPrime.Content>,
  'asChild' | 'forceMount'
> &
  HTMLMotionProps<'div'> & {
    keepRendered?: boolean;
  };

function AccordionContentPrimitive({
  keepRendered = true,
  transition = { duration: 0.35, ease: 'easeInOut' },
  ...props
}: AccordionContentProps) {
  const { isOpen } = useAccordionItem();
  // Reduced motion: open and close instantly.
  const reduce = useReducedMotion();
  const activeTransition = reduce ? { duration: 0 } : transition;

  return (
    <AnimatePresence>
      {keepRendered ? (
        <AccordionPrime.Content asChild forceMount>
          <motion.div
            key="accordion-content"
            data-motion
            data-slot="accordion-content"
            initial={{ height: 0, opacity: 0, '--mask-stop': '0%', y: 20 }}
            animate={
              isOpen
                ? { height: 'auto', opacity: 1, '--mask-stop': '100%', y: 0 }
                : { height: 0, opacity: 0, '--mask-stop': '0%', y: 20 }
            }
            transition={activeTransition}
            style={{
              maskImage:
                'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
              WebkitMaskImage:
                'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
              overflow: 'hidden',
            }}
            {...props}
          />
        </AccordionPrime.Content>
      ) : (
        isOpen && (
          <AccordionPrime.Content asChild forceMount>
            <motion.div
              key="accordion-content"
              data-slot="accordion-content"
              initial={{ height: 0, opacity: 0, '--mask-stop': '0%', y: 20 }}
              animate={{
                height: 'auto',
                opacity: 1,
                '--mask-stop': '100%',
                y: 0,
              }}
              exit={{ height: 0, opacity: 0, '--mask-stop': '0%', y: 20 }}
              transition={activeTransition}
              style={{
                maskImage:
                  'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
                WebkitMaskImage:
                  'linear-gradient(black var(--mask-stop), transparent var(--mask-stop))',
                overflow: 'hidden',
              }}
              {...props}
            />
          </AccordionPrime.Content>
        )
      )}
    </AnimatePresence>
  );
}


function getStrictContext<T>(
  name?: string,
): readonly [
  ({
    value,
    children,
  }: {
    value: T;
    children?: React.ReactNode;
  }) => React.JSX.Element,
  () => T,
] {
  const Context = React.createContext<T | undefined>(undefined);

  const Provider = ({
    value,
    children,
  }: {
    value: T;
    children?: React.ReactNode;
  }) => <Context.Provider value={value}>{children}</Context.Provider>;

  const useSafeContext = () => {
    const ctx = React.useContext(Context);
    if (ctx === undefined) {
      throw new Error(`useContext must be used within ${name ?? 'a Provider'}`);
    }
    return ctx;
  };

  return [Provider, useSafeContext] as const;
}

export { getStrictContext };

interface CommonControlledStateProps<T> {
  value?: T;
  defaultValue?: T;
}

/** Controlled when `value` is passed, otherwise keeps its own state. */
export function useControlledState<T>(
  props: CommonControlledStateProps<T> & { onChange?: (value: T) => void },
): readonly [T, (next: T) => void] {
  const { value, defaultValue, onChange } = props;
  const [internal, setInternal] = React.useState<T>(defaultValue as T);
  const state = value !== undefined ? value : internal;

  const setState = React.useCallback(
    (next: T) => {
      setInternal(next);
      onChange?.(next);
    },
    [onChange],
  );

  return [state, setState] as const;
}
