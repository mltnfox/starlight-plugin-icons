import type { StarlightUserConfig } from '@astrojs/starlight/types'
import type { SidebarInput } from './lib/sidebar'
import { z } from 'zod'

export const StarlightIconsOptionsSchema = z
  .object({
    /**
     * Defines whether the sidebar component is overridden.
     * @default false
     */
    sidebar: z.boolean().default(false),
    /**
     * Defines whether to extract and generate the icon safelist.
     * @default false
     */
    extractSafelist: z.boolean().default(false),
    /**
     * Controls all codeblock-related features: CSS injection and icon hook.
     * @default false
     */
    codeblock: z.boolean().default(false),
    /**
     * Maps file extensions (without the leading dot) to UnoCSS icon classes.
     * These take priority over Material Icon Theme lookups.
     * @example { 'myext': 'i-custom:my-icon', 'config.special.json': 'i-custom:config', 'folder:assets': 'i-custom:folder-assets' }
     */
    customFileIcons: z.record(z.string(), z.string()).optional(),
  })

export type StarlightIconsOptions = z.input<typeof StarlightIconsOptionsSchema>

export type StarlightUserConfigWithIcons = Omit<StarlightUserConfig, 'sidebar'> & {
  sidebar?: SidebarInput[]
}
