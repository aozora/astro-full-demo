import {useEffect} from 'react'
import {usePaneRouter} from 'sanity/structure'

/**
 * AutoPreviewPane is a component designed to automatically manage the state
 * of the "preview" pane within a router-based pane management system.
 *
 * It ensures that a "preview" view is activated based on specific conditions:
 * - If there are no active panes with a "preview" view, it will automatically
 *   activate or duplicate the current pane to include a "preview" view.
 * - If there are sibling panes in the group and the current group index is 1,
 *   it will set the view to "preview".
 * - If no sibling panes exist in the group, the current pane is duplicated.
 *
 * This component internally utilizes the `usePaneRouter` hook to manage pane
 * states and routing operations.
 *
 * The logic is executed within an effect and adjusts views accordingly during
 * rendering lifecycles. Note that specific linting rules are disabled for the
 * dependency array to prevent unintended effect re-runs.
 *
 * The component itself does not return any rendering output.
 *
 * REF: https://www.sanity.io/schemas/open-editor-and-preview-pane-in-split-view-all-the-time-e79a8e1c
 */
export const AutoPreviewPane = () => {
  const {setView, duplicateCurrent, groupIndex, hasGroupSiblings, routerPanesState} =
    usePaneRouter()

  useEffect(() => {
    // Check if "preview" is active
    const isPreviewActive = routerPanesState.some((group) =>
      group.some((pane) => pane.params?.view === 'preview'),
    )

    if (!isPreviewActive) {
      if (hasGroupSiblings) {
        if (groupIndex === 1) {
          setView('preview')
        }
      } else {
        duplicateCurrent()
      }
    }
    // Ignoring this because adding deps causes lots of loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
