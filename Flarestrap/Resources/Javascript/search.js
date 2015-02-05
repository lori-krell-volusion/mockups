(function()
		{
			var url = new MadCap.Utilities.Url(document.location.href);

			// Search is not supported for WebOS currently.
			if (navigator.platform != "webOS")
			{
				var searchQuery = url.QueryMap.GetItem("searchQuery");

				if (searchQuery != null)
				{
					var link = "Resources/Search.htm?query=" + searchQuery;

					var firstPick = url.QueryMap.GetItem("firstPick");

					if (firstPick != null)
					{
						firstPickBool = MadCap.String.ToBool(firstPick);

						if (firstPickBool)
						{
							link += ("&firstPick=" + firstPickBool);
						}
					}

					document.location.href = link;

					return;
				}
			}

			var cshid = url.QueryMap.GetItem("cshid");

			if (cshid != null)
			{
				new MadCap.HelpViewer.AliasFile("Data/Alias.xml", function(aliasFile)
				{
					var idInfo = aliasFile.LookupID(cshid);

					if (idInfo.Found)
					{
						document.location.href = idInfo.Topic;
					}
				});

				// Since we fetch the alias file asynchronously, the body of the page will continue loading and display before we redirect the page.
				// For this reason, the body style is set to display="none" until the page loads. If a CSH call is being made, return here so that
				// the window onload even doesn't get registered.
				return;
			}

			//

			MadCap.Utilities.Event.AddEventListener(window, "load", WindowOnload, false);

			function WindowOnload(e)
			{
				document.body.style.display = "";

				// Search is not supported for WebOS currently.
				if (navigator.platform != "webOS")
				{
					var searchContainer = document.getElementById("searchContainer");

					// If search is disabled in the skin, searchContainer won't exist.
					if (searchContainer != null)
					{
						searchContainer.style.display = "block";
					}
				}
			}
		})();