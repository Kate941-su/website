'use client';

import { Card, CardContent } from "@/components/ui/card";

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to My Website! 👋
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I am a software engineer from Japan 🇯🇵 now living in Germany 🇩🇪.
            I have worked professionally since 2021 and spend most of my time building mobile applications.
          </p>
        </section>
    
        {/* About Section */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            OSS Activities
          </h2>
{/* Dart Packages Tab */}
<div className="language-tab" id="dart-packages">
        <h3>Dart 🎯</h3>
         <a
           href="https://pub.dev/packages/fresult"
           className="group block text-sm text-gray-700 hover:text-yellow-600 mb-2"
           target="_blank"
           rel="noopener noreferrer"
         >
             - <span className="font-semibold text-blue-600 group-hover:underline">fresult</span>: Result type with <a href="https://pub.dev/packages/freezed" className="text-blue-600 hover:underline">freezed</a>
        </a>
         <a
           href="https://pub.dev/packages/unused_import_remover"
           className="group block text-sm text-gray-700 hover:text-yellow-600 mb-4"
           target="_blank"
           rel="noopener noreferrer"
         >
             - <span className="font-semibold text-blue-600 group-hover:underline">unused_import_remover</span>: Remove unnecessary packages in Flutter
        </a>
    </div>

    {/* Swift Packages Tab */}
    <div className="language-tab" id="swift-packages">
        <h3>Swift 🍎</h3>
         <a
           href="https://github.com/Kate941-su/freezed_swift"
           className="group block text-sm text-gray-700 hover:text-yellow-600 mb-2"
           target="_blank"
           rel="noopener noreferrer"
         >
             - <span className="font-semibold text-blue-600 group-hover:underline">freezed_swift</span>: <a href="https://pub.dev/packages/freezed" className="text-blue-600 hover:underline">freezed</a> like type definition Macro for Swift
        </a>
         <a
           href="https://github.com/Kate941-su/SFSymbolIcon"
           className="group block text-sm text-gray-700 hover:text-yellow-600 mb-4"
           target="_blank"
           rel="noopener noreferrer"
         >
             - <span className="font-semibold text-blue-600 group-hover:underline">SFSymbolIcon</span>: Use SFSymbol icon without runtime error
        </a>
    </div>

    {/* Kotlin Package Tab */}
    <div className="language-tab" id="kotlin-packages">
        <h3>Kotlin ☕</h3>
         <a
           href="https://central.sonatype.com/artifact/io.github.kate941-su/mplogger/overview"
           className="group block text-sm text-gray-700 hover:text-yellow-600 mb-4"
           target="_blank"
           rel="noopener noreferrer"
         >
             - <span className="font-semibold text-blue-600 group-hover:underline">mplogger</span>: Logger for Kotlin Multi Platform
        </a>
    </div>

    {/* Python Package Tab */}
    <div className="language-tab" id="python-packages">
        <h3>Python 🐍</h3>
         <a
           href="https://github.com/Kate941-su/OpenLicenseDetect"
           className="group block text-sm text-gray-700 hover:text-yellow-600 mb-4"
           target="_blank"
           rel="noopener noreferrer"
         >
             - <span className="font-semibold text-blue-600 group-hover:underline">OpenLicenseDetect</span>: Find libraries in any directories
        </a>
    </div>

    {/* Javascript/Typescript Packages Tab */}
    <div className="language-tab" id="js-ts-packages">
        <h3>Javascript/Typescript 🌐</h3>
         <a
           href="https://github.com/Kate941-su/TimberJ"
           className="group block text-sm text-gray-700 hover:text-yellow-600 mb-2"
           target="_blank"
           rel="noopener noreferrer"
         >
             - <span className="font-semibold text-blue-600 group-hover:underline">TimberJ</span>: Kotlin Like Logger for Typescript developers
        </a>
         <a
           href="https://github.com/Kate941-su/QRCodeGenExt"
           className="group block text-sm text-gray-700 hover:text-yellow-600 mb-2"
           target="_blank"
           rel="noopener noreferrer"
         >
             - <span className="font-semibold text-blue-600 group-hover:underline">QRCodeGenExt</span>: Chrome extension for creating website QRcode where you are opening
        </a>
         <a
           href="https://github.com/Kate941-su/Resumaker_core"
           className="group block text-sm text-gray-700 hover:text-yellow-600 mb-4"
           target="_blank"
           rel="noopener noreferrer"
         >
             - <span className="font-semibold text-blue-600 group-hover:underline">Resumaker core</span>: Resume maker by Json or Yaml file
        </a>
    </div>


        {/* Research Interests */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            My interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <Card key={area.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Recent Updates */}
        {/* <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Recent Updates
          </h2>
          <div className="space-y-4">
            {recentUpdates.map((update) => (
              <div
                key={update.label}
                className={`border-l-4 pl-4 ${update.accentClass}`}
              >
                <p className="text-sm text-gray-500 mb-1">{update.label}</p>
                <p className="text-gray-900">{update.description}</p>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}
