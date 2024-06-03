

import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';

export default function modal() {
    const isPresented = router.canGoBack();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
        {!isPresented && <Link href="../">Dismiss</Link>}
        {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
        <StatusBar />
      </View>
    );
}