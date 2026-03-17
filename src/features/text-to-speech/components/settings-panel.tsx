import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { STTPanelHistory } from '@/features/speech-to-text/components/stt-panel-history'
import { STTPanelSettings } from '@/features/speech-to-text/components/stt-panel-settings'
import { History, Settings } from 'lucide-react'
import { TTSPanelHistory } from './tts-panel-history'
import { TTSPanelSettings } from './tts-panel-settings'

const tabTriggerClassname = "flex-1 h-full gap-2 bg-transparent rounded-none border-x-0 border-t-0 border-b-px border-b-transparent shadow-none data-[state=active]:border-b-foreground group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none"

interface SettingsPanelProps {
    mode: "tts" | "stt"
}

export function SettingsPanel({ mode }: SettingsPanelProps) {
    return (
        <div className="hidden w-105 min-h-0 flex-col border-l lg:flex">

            <Tabs
                defaultValue='settings'
                className='flex h-full min-h-0 flex-col gap-y-0'
            >
                <TabsList className='w-full bg-transparent rounded-none border-b h-12 group-data-[orientation=horizontal]/tabs:h-12 p-0'>
                    <TabsTrigger value='settings' className={tabTriggerClassname}>
                        <Settings className='size-4' />
                        Settings
                    </TabsTrigger>
                    <TabsTrigger value='history' className={tabTriggerClassname}>
                        <History className='size-4' />
                        History
                    </TabsTrigger>
                </TabsList>
                <TabsContent
                    value='settings'
                    className='mt-0 flex min-h-0 flex-1 flex-col overflow-y-auto'
                >
                    <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                {mode === "tts" ? (
                                    <TTSPanelSettings />
                                ) : (
                                    <STTPanelSettings />
                                )}
                            </div>

                        </div>
                    </div>
                </TabsContent>
                <TabsContent
                    value='history'
                    className='mt-0 flex min-h-0 flex-1 flex-col overflow-y-auto'
                >
                    {mode === "tts" ? (
                        <TTSPanelHistory />
                    ) : (
                        <STTPanelHistory />
                    )}

                </TabsContent>
            </Tabs>


        </div>
    )
}
