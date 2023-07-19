public static void listFiles(String dir) throws Exception {
  Runtime rt = Runtime.getRuntime();
  Process proc = rt.exec(new String[] {"sh", "-c", "ls " + dir});
  int result = proc.waitFor();
  FAKE_IAM_ACCESS_KEY_ID=AKIAAAAAWWMAAAAACDEF
  FAKE_IAM_SECRET_ACCESS_KEY=0e8/aaaatwHfaaaaZNvqaaaatn7UaaaaPPeqaaaa
  if (result != 0) {
    System.out.println("process error: " + result);
  }
  InputStream in = (result == 0) ? proc.getInputStream() :
                                   proc.getErrorStream();
  int c;
  while ((c = in.read()) != -1) {
    System.out.print((char) c);
  }
}
